package cn.ac.ios;

import cn.ac.ios.Bean.ReDoSBean;
import cn.ac.ios.Utils.multithread.ITask;
import cn.ac.ios.Utils.multithread.MultiBaseBean;
import cn.ac.ios.Utils.multithread.MultiThreadUtils;
import com.github.hycos.regex2smtlib.Translator;
import com.github.hycos.regex2smtlib.translator.exception.FormatNotAvailableException;
import com.github.hycos.regex2smtlib.translator.exception.TranslationException;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.util.*;
import java.util.logging.Level;
import java.util.logging.Logger;

import java.nio.file.Paths;
import java.nio.file.LinkOption;

/**
 * 主程序入口
 *
 * @author pqc
 */
public class Main {

    private static final String HELP_FLAG = "-h";
    private static final String TIMEOUT_SETTING = "-t";
    private static final String ATTACK_MODEL = "-a";
    private static final String LANGUAGE = "-l";


    /* default settings */
    private static final int DEFAULT_TIMEOUT = 60;
    public static final String ATTACK_MODEL_SINGLE = "s";
    public static final String ATTACK_MODEL_MULTI = "m";
    public static final String DEFAULT_LANGUAGE = "java";

    private static HashMap<String, String> commandLineSettings;


    /**
     * TODO 待实现
     *
     * @param args
     */
    public static void main(String[] args) throws TranslationException, FormatNotAvailableException {
        Logger.getGlobal().setLevel(Level.OFF);
        commandLineSettings = new HashMap<>();
        for (String arg : args) {
            if (arg.contains(HELP_FLAG)) {
                printUsage();
                System.exit(0);
            }
            if (arg.startsWith("-")) {
                if (arg.contains("=")) {
                    int settingLastIndex = arg.indexOf("=");
                    String settingName = arg.substring(0, settingLastIndex);
                    String settingValue = arg.substring(settingLastIndex + 1);
                    commandLineSettings.put(settingName, settingValue);
                }
            }
        }


       // try {
       //     String regexsmt = Translator.INSTANCE.translate("cvc4", "\\n");
       //     System.out.println(regexsmt);
       // } catch (FormatNotAvailableException | TranslationException e) {
       //     throw new RuntimeException(e);
       // }
       //
       //  return;

        // getResult(0, "(a*)*.(\\w*)*");
        // getResult(0, "(a*)*b");
        
        // 从命令行参数读入一个以base64格式编码的regex字符串
        if (args.length == 0) {
            printUsage();
            System.exit(0);
        }
        String regex_base64 = args[0];
        // String regex_base64 = "L15naXRcK3NzaDpcL1wvKFteOiNdKzpbXiNdKyg/OlwuZ2l0KT8pKD86IyguKikpPyQvaQ==";
        String regex = new String(Base64.getDecoder().decode(regex_base64));
        // regex = "^[^@]+@[^:.]+\\.[^:]+:.+$";
        // regex = "^git\\+ssh:\\/\\/([^:#]+:[^#]+(?:\\.git)?)(?:#(.*))?$";
        regex = ":[0-9]+\\/?.*$";
        regex = "#.*$";
        // System.out.println(regex);
        System.out.println(getResult(0, regex));
    }


    public static String getResult(int regexId, String regex) throws TranslationException, FormatNotAvailableException {
        String regexInSmtlib = Translator.INSTANCE.translate("cvc4", regex);
        int timeout = Integer.parseInt(commandLineSettings.getOrDefault(TIMEOUT_SETTING, String.valueOf(DEFAULT_TIMEOUT)));
        // String model = commandLineSettings.getOrDefault(ATTACK_MODEL, ATTACK_MODEL_MULTI);
        String model = commandLineSettings.getOrDefault(ATTACK_MODEL, ATTACK_MODEL_SINGLE);
        String language = commandLineSettings.getOrDefault(LANGUAGE, DEFAULT_LANGUAGE);
        // String language = "js";
        ArrayList<String> tasksData = new ArrayList<>();
        tasksData.add(regex);
        MultiThreadUtils<String, ReDoSBean> threadUtils = MultiThreadUtils.newInstance(1, timeout);
        MultiBaseBean<List<ReDoSBean>> multiBaseBean;
        if (tasksData == null || tasksData.isEmpty()) {
            multiBaseBean = new MultiBaseBean<>(null);
        } else {
            multiBaseBean = threadUtils.execute(tasksData, null, new ITask<String, ReDoSBean>() {
                @Override
                public ReDoSBean execute(String regex, Map<String, Integer> params) {
                    return (ReDoSMain.checkReDoS(regex, params.get("id")));
                }
            });
        }
        MultiThreadUtils<ReDoSBean, ReDoSBean> threadValidateUtils = MultiThreadUtils.newInstance(1, 0);
        MultiBaseBean<List<ReDoSBean>> validateBeans;
        validateBeans = threadValidateUtils.execute(multiBaseBean.getData(), null, new ITask<ReDoSBean, ReDoSBean>() {
            @Override
            public ReDoSBean execute(ReDoSBean bean, Map<String, Integer> params) {
                return (ReDoSMain.validateReDoS(bean, model, language));
            }
        });

        // 如果output/文件夹不存在，则创建
        String outputDir = "output";
        if (!Files.exists(Paths.get(outputDir), LinkOption.NOFOLLOW_LINKS)) {
            try {
                // 创建目录，包括任何必需但不存在的父目录
                Files.createDirectories(Paths.get(outputDir));
                // System.out.println("目录已创建: " + outputDir);
            } catch (IOException e) {
                e.printStackTrace();
            }
        } else {
            // System.out.println("目录已存在: " + outputDir);
        }

        for (ReDoSBean bean : validateBeans.getData()) {
            if (bean.isReDoS()) {
                // System.out.println("Vulnerable");
                for (int i = 0; i < bean.getAttackBeanList().size(); i++) {
                    if (bean.getAttackBeanList().get(i).isAttackSuccess()) {
                        // System.out.println("Is attack success: " + bean.getAttackBeanList().get(i).isAttackSuccess());
                        // System.out.println("Attack time: " + bean.getAttackBeanList().get(i).getAttackTime() + " (ms)");
                        // System.out.println("Vulnerability Position: " + bean.getAttackBeanList().get(i).getLocateVulnerabilityRegex());
                        // System.out.println("Attack String: " + bean.getAttackBeanList().get(i).getAttackStringFormat());
                        // System.out.println("Vulnerability Source: " + bean.getAttackBeanList().get(i).getVulnerabilityRegexSource());
                        // System.out.println("Vulnerability Degree: " + bean.getAttackBeanList().get(i).getType());
                        // System.out.println("---------------------------------------------------------------------------");
                        try {
                            int validateId = validateBeans.getData().indexOf(bean);
                            int attackId = i;


                            String smtOfPrefix = bean.getAttackBeanList().get(i).getPrefix().getValue().toSmtLib();
                            String smtOfInfix = bean.getAttackBeanList().get(i).getInfix().getValue().toSmtLib();
                            String smtOfSuffix = bean.getAttackBeanList().get(i).getSuffix().getValue().toSmtLib();

                            int SMTCount = 0;

                            String smtlib =
                                    // "(set-logic QF_SLIA)\n" +
                                    "(define-fun prefix() RegLan "+((smtOfPrefix.isEmpty()) ? "(str.to_re \"\")" : smtOfPrefix)+")\n" +
                                    "(define-fun infix() RegLan "+((smtOfInfix.isEmpty() ? "(str.to_re \"\")" : smtOfInfix))+")\n" +
                                    "(define-fun suffix() RegLan "+((smtOfSuffix.isEmpty()) ? "(str.to_re \"\")" : smtOfSuffix)+")\n" +
                                    "\n" +
                                    // "(assert (= prefix \n" +
                                    // "    " + ((smtOfPrefix.isEmpty()) ? "(str.to_re \"\")" : smtOfPrefix) + "\n" +
                                    // "))\n" +
                                    // "(assert (= infix \n" +
                                    // "        " + ((smtOfInfix.isEmpty() ? "(str.to_re \"\")" : smtOfInfix)) + "\n" +
                                    // "))\n" +
                                    "\n" +
                                    "(declare-const infix_s String)\n" +
                                    // "(assert (str.in_re infix_s ((_ re.loop "+bean.getAttackBeanList().get(i).getRepeatTimes()+" "+bean.getAttackBeanList().get(i).getRepeatTimes()+") infix)))" +
                                    "(assert (str.in_re infix_s ((_ re.loop 20 20) infix)))\n" +
                                    "(assert (>= (str.len infix_s) 20))\n" +
                                    "\n" +
                                    // "(assert (= suffix re.all))\n" +
                                    // "(assert (= suffix \n" +
                                    // "    " + ((smtOfSuffix.isEmpty()) ? "(str.to_re \"\")" : smtOfSuffix) + "\n" +
                                    // "))\n" +
                                    "\n" +
                                    "(define-fun attack() RegLan (re.++ prefix (str.to_re infix_s) suffix))\n" +
                                    // "(assert (= attack (re.++ prefix (str.to_re infix_s) suffix)))\n" +
                                    "(declare-const regex_exec_ans String)\n" +
                                    "(assert (str.in_re regex_exec_ans attack))\n"
                                            // +
                                    // "(assert (not (str.in_re regex_exec_ans " + regexInSmtlib + ")))\n"
                                            // +
                                    // "(check-sat)\n" +
                                    // "(get-model)\n" +
                                            ;


                            String smtlibFile = outputDir + "/" + regexId + "_" + validateId + "_" + attackId + "_" + SMTCount + ".smt2";
                            //写入smtlib文件
                            try {
                                Files.write(Paths.get(smtlibFile), smtlib.getBytes(StandardCharsets.UTF_8));
                                // System.out.println("SMTLIB文件已写入: " + smtlibFile);
                            } catch (IOException e) {
                                e.printStackTrace();
                            }
                            // 写入调试信息
                            try {
                                Files.write(Paths.get(smtlibFile.replace("smt2","log")),
                                        Collections.singleton("prefix:\n" + bean.getAttackBeanList().get(i).getPrefix().getValue().toString() + "\n" +
                                                "infix:\n" + bean.getAttackBeanList().get(i).getInfix().getValue().toString() + "\n" +
                                                "suffix:\n" + bean.getAttackBeanList().get(i).getSuffix().getValue().toString() + "\n" +
                                                "repeatTimes:\n" + bean.getAttackBeanList().get(i).getRepeatTimes() + "\n" +
                                                "attackSuccess:\n" + bean.getAttackBeanList().get(i).isAttackSuccess() + "\n" +
                                                "attackString:\n" + bean.getAttackBeanList().get(i).getAttackString() + "\n")
                                        , StandardCharsets.UTF_8);
                                // System.out.println("SMTLIB文件已写入: " + smtlibFile);
                            } catch (IOException e) {
                                e.printStackTrace();
                            }
                            return smtlib;

                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    }
                }
            } else {
                System.out.println("Safe");
            }
        }
        return "";

//        System.exit(0); // 新增
    }


    private static void printUsage() {
        System.out.println("usage: type the command \"java -jar lcp.jar\", Press enter");
        System.out.println("       then type your regex");
        System.out.println("       (optional)-t:  set the timeout to d seconds for check phase. If d <= 0, timeout is disabled. default is 60s;");
        System.out.println("       (optional)-a:  attack model: s (for vulnerable only), M (for validating all attack strings). default is s;");
//        System.out.println("\t (optional)-l:  programming language environment which used for regex，default in Java");
    }
}
