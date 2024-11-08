/**
 * regex2smtlib: A regex to smtlib translator
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2017 Julian Thome <julian.thome.de@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is furnished to do
 * so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 **/

package com.github.hycos.regex2smtlib.translator.regex;

import com.github.hycos.regex2smtlib.translator.TranslationMap;
import com.github.hycos.regex2smtlib.regexparser.RegexParser;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.snt.inmemantlr.exceptions.IllegalWorkflowException;
import org.snt.inmemantlr.exceptions.ParseTreeProcessorException;
import org.snt.inmemantlr.exceptions.ParsingException;
import org.snt.inmemantlr.tree.ParseTreeNode;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static com.github.hycos.regex2smtlib.translator.TranslationMap.Element.*;


public class RegexTranslator extends AbstractRegexTranslator {

    final static Logger LOGGER = LoggerFactory.getLogger(RegexTranslator.class);


    private TranslationMap tmap;
    private EscapingFunction escaper;

    private static String anyCharExceptNewline = charClass2Smtlib(".");
    private static String digitChars = charClass2Smtlib("\\d");
    // private static String digitChars = "(re.range \"0\" \"9\")";
    private static String notDigitChars = charClass2Smtlib("\\D");
    private static String horizontalWhiteSpaceChars = charClass2Smtlib("\\h");
    private static String notHorizontalWhiteSpaceChars = charClass2Smtlib("\\H");
    private static String newlineChars = charClass2Smtlib("\\R");
    // private static String notNewlineChars = charClass2Smtlib("\\N");
    private static String whiteSpaceChars = charClass2Smtlib("\\s");
    private static String notWhiteSpaceChars = charClass2Smtlib("\\S");
    private static String verticalWhiteSpaceChars = charClass2Smtlib("\\v");
    private static String notVerticalWhiteSpaceChars = charClass2Smtlib("\\V");
    private static String wordChars = charClass2Smtlib("\\w");
    private static String notWordChars = charClass2Smtlib("\\W");
    private static String extendedUnicodeSequenceChars = charClass2Smtlib("\\X");




    public RegexTranslator(String regex, TranslationMap tmap,
                           EscapingFunction esc)
            throws
            IllegalWorkflowException, ParsingException {
        // obtain the parse tree from the regular expression an process it
        super(RegexParser.INSTANCE.parse(regex));

        // visualize parse tree in dot format
        LOGGER.debug("{}", this.parseTree.toDot());
        this.tmap = tmap;
        this.escaper = esc;
    }

    public RegexTranslator(String regex, TranslationMap tmap)
            throws
            IllegalWorkflowException, ParsingException {
        this(regex, tmap, new SmtEscape());
    }


    public String getAny() {
        if(tmap.has(ALLCHAR)) {
            return tmap.get(ALLCHAR);
        } else {
            char from = 0;
            char to = 255;
            String any = "(" + tmap.get(RANGE) + " \"" + escaper.charEscape(from) + "\"" +
                    " \"" + escaper.charEscape(to) + "\")";
            return any;
        }
    }


    public static String charClass2Smtlib(String regex) {
        Pattern pattern = Pattern.compile(regex, Pattern.UNICODE_CHARACTER_CLASS);

        int lastMatched = -1;
        String charClassInSmtlib = "";
        // for (int i = 0; i <= 0x10FFFF; i++) {
        for (int i = 0; i <= 0xFF; i++) {
            String s = new String(Character.toChars(i));
            Matcher matcher = pattern.matcher(s);
            if (matcher.matches()) {
                // 打印Unicode字符和其对应的代码点
                // System.out.println(s + " " + i);
                if (lastMatched == -1) {
                    charClassInSmtlib = "(re.range " + String.format("\"\\u{%02x}\"", i);
                } else if (lastMatched + 1 == i) {
                    // do nothing
                } else {
                    charClassInSmtlib += " " + String.format("\"\\u{%02x}\"", lastMatched) + ") (re.range " + String.format("\"\\u{%02x}\"", i);
                }
                lastMatched = i;
            }
        }
        charClassInSmtlib += " " + String.format("\"\\u{%02x}\"", lastMatched) + ")";
        // 如果charClassInSmtlib为空，说明正则表达式匹配不到任何字符，返回空字符
        if (charClassInSmtlib.equals("")) {
            return "(str.to_re \"\")";
        }
        // 对"re.range"进行计数，如果charClassInSmtlib只有一个字符，直接返回这个字符
        int rangeCount = charClassInSmtlib.split("re.range").length - 1;
        if (rangeCount == 1) {
            return charClassInSmtlib;
        }

        charClassInSmtlib = "(re.union " + charClassInSmtlib + ")";

        // System.out.println(charClassInSmtlib);

        return charClassInSmtlib;
    }

    @Override
    protected void process(ParseTreeNode n) throws ParseTreeProcessorException {

        LOGGER.debug("Handle " + n.getId() + " " + n.getRule());

        switch (n.getRule()) {

            case "root":
            case "capture":
                simpleProp(n);
                break;
            case "complement":
                if(!tmap.has(COMPLEMENT)) {
                    throw new ParseTreeProcessorException("complement not " +
                            "supported");
                }
                String comp = "(" + tmap.get(COMPLEMENT) + " " + smap.get(n
                        .getChildren().get(0)) + ")";
                smap.put(n, comp);
                break;
            case "intersection":

                if(!tmap.has(INTERSECTION)) {
                    throw new ParseTreeProcessorException("intersection not " +
                            "supported");
                }
                String isect = createBinaryExpression(tmap.get(INTERSECTION), n
                        .getChildren());
                //alt = "(assert (" + MEMBERSHIP + " v" + vid + " " + alt + " ))";
                //String salt = putVar(alt);
                smap.put(n, isect);
                break;
            case "alternation":
                if (n.getChildren().size() == 1) {
                    simpleProp(n);
                    break;
                }
                String alt = createBinaryExpression(tmap.get(UNION), n.getChildren());
                //alt = "(assert (" + MEMBERSHIP + " v" + vid + " " + alt + " ))";
                //String salt = putVar(alt);
                smap.put(n, alt);
                break;
            case "expr":
                if (n.getChildren().size() == 1) {
                    simpleProp(n);
                    break;
                }
                boolean concat = true;
                for (ParseTreeNode c : n.getChildren()) {
                    if (!c.getRule().equals("element")) {
                        concat = false;
                    }
                }
                if (concat) {
                    String sconcat = createBinaryExpression(tmap.get(CONCAT), n
                            .getChildren());
                    //sconcat = "(assert (" + MEMBERSHIP + " v" + vid + " " + sconcat + "))";
                    //String sexpr = putVar(sconcat);
                    smap.put(n, sconcat);
                }
                break;
            case "element":

                if (n.getChildren().size() == 1) {
                    simpleProp(n);
                } else if (n.getChildren().size() == 2) {

                    ParseTreeNode last = n.getChildren().get(1);
                    ParseTreeNode first = n.getChildren().get(0);

                    //LOGGER.info("FIRST " + first.getEscapedLabel() + ">> " +
                    //        first.getId() + " " + smap.get(first));
                    //LOGGER.info("LParseTree " + last.getEscapedLabel() +
                    // ">> " + last.getId() + " " + smap.get(last));


                    String lbl = last.getLabel();

                    if (last != null && last.getRule().equals("quantifier")) {
                        switch (lbl) {
                            case "*":
                                String star = "(" + tmap.get(STAR) + " " + smap
                                        .get(first) + " )";
                                //String starvar = putVar(star);
                                //smap.put(n, starvar);
                                smap.put(n,star);
                                break;
                            case "+":
                                String plus = "(" + tmap.get(PLUS) + " " + smap
                                        .get(first) + " )";
                                smap.put(n,plus);
                                break;
                            case "?":

                                if(tmap.has(OPT)) {
                                    String opt = "(" + tmap.get(OPT) + " " + smap
                                            .get(first) + " )";
                                    smap.put(n, opt);
                                } else {
                                    lbl = "{0,1}";
                                }
                                break;
                            case "??":

                                if(tmap.has(OPT)) {
                                    String opt = "(" + tmap.get(OPT) + " " + smap
                                            .get(first) + " )";
                                    smap.put(n, opt);
                                } else {
                                    lbl = "{0,1}";
                                }
                                break;

                        }

                        LOGGER.debug("lbl is {}", lbl);
                        int min = -1;
                        int max = -1;
                        Pattern pattern = Pattern.compile("\\{([0-9]*)(,)?" +
                                "([0-9]+)?\\}");
                        Matcher matcher = pattern.matcher(lbl);


                        if (matcher.matches()) {
                            //LOGGER.debug("group 1 {}", matcher.group(1));
                            //LOGGER.debug("group 2 {}", matcher.group(2));

                            String grp1 = matcher.group(1);
                            String grp2 = matcher.group(2);
                            String grp3 = matcher.group(3);
                            if (grp1 != null && !grp1.isEmpty()) {
                                min = Integer.parseInt(grp1);
                            }
                            if (grp3 != null && !grp2.isEmpty()) {
                                max = Integer.parseInt(grp3);
                            }


                            //LOGGER.debug("min {}, max {}", min,max);
                            String smin = "";
                            String sran = "";

                            if (min > 0) {
                                for (int i = 1; i < min; i++) {
                                    smin += " (" + tmap.get(CONCAT) + " " + smap
                                            .get
                                                    (first);
                                }
                                smin += " " + smap.get(first);
                                smin += StringUtils.repeat(")", min - 1);
                            } else if (min <= 0) {
                                smin += "(str.to_re \"\")";
                            }


                            if (max > -1) {
                                String unroll = smin;
                                for (int i = min; i < max; i++) {
                                    sran += " (" + tmap.get(UNION) + " " +
                                            unroll;
                                    unroll = " (" + tmap.get(CONCAT) + " " +
                                            this
                                                    .smap.get(first) + "  " + unroll + ")";
                                }
                                sran += " " + unroll;
                                sran += StringUtils.repeat(")", max - min);
                            } else if (max <= 0) {
                                if (grp2 != null && !grp2.isEmpty()) {
                                    if (min <= 0) { // {0,} = a*
                                        sran = " (" + tmap.get(STAR) + " " + smap
                                                .get(first) + " )";
                                    }
                                    else { // a{m,} = a{m} a*
                                        sran = " (" + tmap.get(CONCAT) + " " + smin +
                                                " (" + tmap.get(STAR) + " " + smin + " " + "))";
                                    }
                                } else {
                                    // a{m} = a a a ... a
                                    sran = smin;
                                }
                            }


                            smap.put(n, sran);
                        }
                    }
                }

                break;

            case "number":
            case "letter":
            case "literal":
            case "cc_literal":
            case "shared_literal":
                String label = " (" + tmap.get(CONV) + " " + "\"" + esc(n
                        .getLabel
                                ()) + "\")";
                if (n.getLabel().equals("\\r")) {
                    label = " (str.to_re \"\\u{0D}\")";
                }
                else if (n.getLabel().equals("\\n")) {
                    label = " (str.to_re \"\\u{0A}\")";
                }
                else if (n.getLabel().equals("\\t")) {
                    label = " (str.to_re \"\\u{09}\")";
                }
                this.smap.put(n,label);
                break;
            case "atom":
                if(n.isLeaf()) {
                    if(n.getLabel().equals(".")) {
                        // smap.put(n, getAny());
                        smap.put(n, anyCharExceptNewline);
                    }
                    else if (n.getLabel().equals("\\d")) {
                        smap.put(n, digitChars);
                    }
                    else if (n.getLabel().equals("\\D")) {
                        smap.put(n, notDigitChars);
                    }
                    else if (n.getLabel().equals("\\h")) {
                        smap.put(n, horizontalWhiteSpaceChars);
                    }
                    else if (n.getLabel().equals("\\H")) {
                        smap.put(n, notHorizontalWhiteSpaceChars);
                    }
                    // else if (n.getLabel().equals("\\N")) {
                    //     smap.put(n, notNewlineChars);
                    // }
                    else if (n.getLabel().equals("\\R")) {
                        smap.put(n, newlineChars);
                    }
                    else if (n.getLabel().equals("\\s")) {
                        smap.put(n, whiteSpaceChars);
                    }
                    else if (n.getLabel().equals("\\S")) {
                        smap.put(n, notWhiteSpaceChars);
                    }
                    else if (n.getLabel().equals("\\w")) {
                        smap.put(n, wordChars);
                    }
                    else if (n.getLabel().equals("\\W")) {
                        smap.put(n, notWordChars);
                    }
                    else if (n.getLabel().equals("\\v")) {
                        smap.put(n, verticalWhiteSpaceChars);
                    }
                    else if (n.getLabel().equals("\\V")) {
                        smap.put(n, notVerticalWhiteSpaceChars);
                    }
                    else if (n.getLabel().equals("\\X")) {
                        smap.put(n, extendedUnicodeSequenceChars);
                    }
                    // else {
                    //     throw new ParseTreeProcessorException("unsupported atom " + n.getLabel());
                    // }
                } else {
                    simpleProp(n);
                }
                break;
            case "cc_atom":
                if (n.getChildren().size() == 0) {
                    if(n.getLabel().equals(".")) {
                        // smap.put(n, getAny());
                        smap.put(n, anyCharExceptNewline);
                    }
                    else if (n.getLabel().equals("\\d")) {
                        smap.put(n, digitChars);
                    }
                    else if (n.getLabel().equals("\\D")) {
                        smap.put(n, notDigitChars);
                    }
                    else if (n.getLabel().equals("\\h")) {
                        smap.put(n, horizontalWhiteSpaceChars);
                    }
                    else if (n.getLabel().equals("\\H")) {
                        smap.put(n, notHorizontalWhiteSpaceChars);
                    }
                    // else if (n.getLabel().equals("\\N")) {
                    //     smap.put(n, notNewlineChars);
                    // }
                    else if (n.getLabel().equals("\\R")) {
                        smap.put(n, newlineChars);
                    }
                    else if (n.getLabel().equals("\\s")) {
                        smap.put(n, whiteSpaceChars);
                    }
                    else if (n.getLabel().equals("\\S")) {
                        smap.put(n, notWhiteSpaceChars);
                    }
                    else if (n.getLabel().equals("\\w")) {
                        smap.put(n, wordChars);
                    }
                    else if (n.getLabel().equals("\\W")) {
                        smap.put(n, notWordChars);
                    }
                    else if (n.getLabel().equals("\\v")) {
                        smap.put(n, verticalWhiteSpaceChars);
                    }
                    else if (n.getLabel().equals("\\V")) {
                        smap.put(n, notVerticalWhiteSpaceChars);
                    }
                    else if (n.getLabel().equals("\\X")) {
                        smap.put(n, extendedUnicodeSequenceChars);
                    }
                    // else {
                    //     throw new ParseTreeProcessorException("unsupported atom " + n.getLabel());
                    // }
                } else if (n.getChildren().size() == 1) {
                    simpleProp(n);
                } else {
                    assert(n.getChildren().size() == 2);
                    ParseTreeNode first = n.getChildren().get(0);
                    ParseTreeNode lParseTree = n.getChildren().get(1);
                    String rex = "(" + tmap.get(RANGE) + " \"" + esc(first
                            .getLabel())
                            + "\" \"" + esc(lParseTree.getLabel()) + "\")";
                    smap.put(n, rex);
                }
                break;
            case "character_class":
                if (n.getChildren().size() == 1) {
                    simpleProp(n);
                } else {
                    String cc = "";
                    int i = 0;
                    for(i = 0; i < n.getChildren().size() - 1; i++) {
                        ParseTreeNode c = n.getChildren().get(i);
                        cc += " (" + tmap.get(UNION) + " " + this.smap.get(c);
                    }
                    cc += " " + this.smap.get(n.getChildren().get(i));
                    cc += StringUtils.repeat(")", n.getChildren().size()-1);
                    smap.put(n, cc);
                }
                // 如果n的label第二位是^，则取反
                if (n.getLabel().charAt(1) == '^') {
                    smap.replace(n, "(re.comp " + smap.get(n) + ")");
                }
                break;
        }
        // String s1 = n.getLabel();
        // String s2 = smap.get(n);
        // System.out.println(s1 + " ::: " + s2);
    }

    private String esc(String s) {
        return escaper.escape(s);
    }

    @Override
    public String getResult() {
        //LOGGER.info(debug());
        return getRootEntry();
    }

    @Override
    public String getVariables() {
        return "";
    }


}
