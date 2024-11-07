# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.10

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list


# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /usr/bin/cmake

# The command to remove a file.
RM = /usr/bin/cmake -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /home/mku/share/tool_source/z3_mur

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /home/mku/tools/z3_59e9c87

# Include any dependencies generated for this target.
include src/math/grobner/CMakeFiles/grobner.dir/depend.make

# Include the progress variables for this target.
include src/math/grobner/CMakeFiles/grobner.dir/progress.make

# Include the compile flags for this target's objects.
include src/math/grobner/CMakeFiles/grobner.dir/flags.make

src/math/grobner/CMakeFiles/grobner.dir/grobner.cpp.o: src/math/grobner/CMakeFiles/grobner.dir/flags.make
src/math/grobner/CMakeFiles/grobner.dir/grobner.cpp.o: /home/mku/share/tool_source/z3_mur/src/math/grobner/grobner.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/mku/tools/z3_59e9c87/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object src/math/grobner/CMakeFiles/grobner.dir/grobner.cpp.o"
	cd /home/mku/tools/z3_59e9c87/src/math/grobner && /usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/grobner.dir/grobner.cpp.o -c /home/mku/share/tool_source/z3_mur/src/math/grobner/grobner.cpp

src/math/grobner/CMakeFiles/grobner.dir/grobner.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/grobner.dir/grobner.cpp.i"
	cd /home/mku/tools/z3_59e9c87/src/math/grobner && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/mku/share/tool_source/z3_mur/src/math/grobner/grobner.cpp > CMakeFiles/grobner.dir/grobner.cpp.i

src/math/grobner/CMakeFiles/grobner.dir/grobner.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/grobner.dir/grobner.cpp.s"
	cd /home/mku/tools/z3_59e9c87/src/math/grobner && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/mku/share/tool_source/z3_mur/src/math/grobner/grobner.cpp -o CMakeFiles/grobner.dir/grobner.cpp.s

src/math/grobner/CMakeFiles/grobner.dir/grobner.cpp.o.requires:

.PHONY : src/math/grobner/CMakeFiles/grobner.dir/grobner.cpp.o.requires

src/math/grobner/CMakeFiles/grobner.dir/grobner.cpp.o.provides: src/math/grobner/CMakeFiles/grobner.dir/grobner.cpp.o.requires
	$(MAKE) -f src/math/grobner/CMakeFiles/grobner.dir/build.make src/math/grobner/CMakeFiles/grobner.dir/grobner.cpp.o.provides.build
.PHONY : src/math/grobner/CMakeFiles/grobner.dir/grobner.cpp.o.provides

src/math/grobner/CMakeFiles/grobner.dir/grobner.cpp.o.provides.build: src/math/grobner/CMakeFiles/grobner.dir/grobner.cpp.o


src/math/grobner/CMakeFiles/grobner.dir/pdd_simplifier.cpp.o: src/math/grobner/CMakeFiles/grobner.dir/flags.make
src/math/grobner/CMakeFiles/grobner.dir/pdd_simplifier.cpp.o: /home/mku/share/tool_source/z3_mur/src/math/grobner/pdd_simplifier.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/mku/tools/z3_59e9c87/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Building CXX object src/math/grobner/CMakeFiles/grobner.dir/pdd_simplifier.cpp.o"
	cd /home/mku/tools/z3_59e9c87/src/math/grobner && /usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/grobner.dir/pdd_simplifier.cpp.o -c /home/mku/share/tool_source/z3_mur/src/math/grobner/pdd_simplifier.cpp

src/math/grobner/CMakeFiles/grobner.dir/pdd_simplifier.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/grobner.dir/pdd_simplifier.cpp.i"
	cd /home/mku/tools/z3_59e9c87/src/math/grobner && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/mku/share/tool_source/z3_mur/src/math/grobner/pdd_simplifier.cpp > CMakeFiles/grobner.dir/pdd_simplifier.cpp.i

src/math/grobner/CMakeFiles/grobner.dir/pdd_simplifier.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/grobner.dir/pdd_simplifier.cpp.s"
	cd /home/mku/tools/z3_59e9c87/src/math/grobner && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/mku/share/tool_source/z3_mur/src/math/grobner/pdd_simplifier.cpp -o CMakeFiles/grobner.dir/pdd_simplifier.cpp.s

src/math/grobner/CMakeFiles/grobner.dir/pdd_simplifier.cpp.o.requires:

.PHONY : src/math/grobner/CMakeFiles/grobner.dir/pdd_simplifier.cpp.o.requires

src/math/grobner/CMakeFiles/grobner.dir/pdd_simplifier.cpp.o.provides: src/math/grobner/CMakeFiles/grobner.dir/pdd_simplifier.cpp.o.requires
	$(MAKE) -f src/math/grobner/CMakeFiles/grobner.dir/build.make src/math/grobner/CMakeFiles/grobner.dir/pdd_simplifier.cpp.o.provides.build
.PHONY : src/math/grobner/CMakeFiles/grobner.dir/pdd_simplifier.cpp.o.provides

src/math/grobner/CMakeFiles/grobner.dir/pdd_simplifier.cpp.o.provides.build: src/math/grobner/CMakeFiles/grobner.dir/pdd_simplifier.cpp.o


src/math/grobner/CMakeFiles/grobner.dir/pdd_solver.cpp.o: src/math/grobner/CMakeFiles/grobner.dir/flags.make
src/math/grobner/CMakeFiles/grobner.dir/pdd_solver.cpp.o: /home/mku/share/tool_source/z3_mur/src/math/grobner/pdd_solver.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/mku/tools/z3_59e9c87/CMakeFiles --progress-num=$(CMAKE_PROGRESS_3) "Building CXX object src/math/grobner/CMakeFiles/grobner.dir/pdd_solver.cpp.o"
	cd /home/mku/tools/z3_59e9c87/src/math/grobner && /usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/grobner.dir/pdd_solver.cpp.o -c /home/mku/share/tool_source/z3_mur/src/math/grobner/pdd_solver.cpp

src/math/grobner/CMakeFiles/grobner.dir/pdd_solver.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/grobner.dir/pdd_solver.cpp.i"
	cd /home/mku/tools/z3_59e9c87/src/math/grobner && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/mku/share/tool_source/z3_mur/src/math/grobner/pdd_solver.cpp > CMakeFiles/grobner.dir/pdd_solver.cpp.i

src/math/grobner/CMakeFiles/grobner.dir/pdd_solver.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/grobner.dir/pdd_solver.cpp.s"
	cd /home/mku/tools/z3_59e9c87/src/math/grobner && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/mku/share/tool_source/z3_mur/src/math/grobner/pdd_solver.cpp -o CMakeFiles/grobner.dir/pdd_solver.cpp.s

src/math/grobner/CMakeFiles/grobner.dir/pdd_solver.cpp.o.requires:

.PHONY : src/math/grobner/CMakeFiles/grobner.dir/pdd_solver.cpp.o.requires

src/math/grobner/CMakeFiles/grobner.dir/pdd_solver.cpp.o.provides: src/math/grobner/CMakeFiles/grobner.dir/pdd_solver.cpp.o.requires
	$(MAKE) -f src/math/grobner/CMakeFiles/grobner.dir/build.make src/math/grobner/CMakeFiles/grobner.dir/pdd_solver.cpp.o.provides.build
.PHONY : src/math/grobner/CMakeFiles/grobner.dir/pdd_solver.cpp.o.provides

src/math/grobner/CMakeFiles/grobner.dir/pdd_solver.cpp.o.provides.build: src/math/grobner/CMakeFiles/grobner.dir/pdd_solver.cpp.o


grobner: src/math/grobner/CMakeFiles/grobner.dir/grobner.cpp.o
grobner: src/math/grobner/CMakeFiles/grobner.dir/pdd_simplifier.cpp.o
grobner: src/math/grobner/CMakeFiles/grobner.dir/pdd_solver.cpp.o
grobner: src/math/grobner/CMakeFiles/grobner.dir/build.make

.PHONY : grobner

# Rule to build all files generated by this target.
src/math/grobner/CMakeFiles/grobner.dir/build: grobner

.PHONY : src/math/grobner/CMakeFiles/grobner.dir/build

src/math/grobner/CMakeFiles/grobner.dir/requires: src/math/grobner/CMakeFiles/grobner.dir/grobner.cpp.o.requires
src/math/grobner/CMakeFiles/grobner.dir/requires: src/math/grobner/CMakeFiles/grobner.dir/pdd_simplifier.cpp.o.requires
src/math/grobner/CMakeFiles/grobner.dir/requires: src/math/grobner/CMakeFiles/grobner.dir/pdd_solver.cpp.o.requires

.PHONY : src/math/grobner/CMakeFiles/grobner.dir/requires

src/math/grobner/CMakeFiles/grobner.dir/clean:
	cd /home/mku/tools/z3_59e9c87/src/math/grobner && $(CMAKE_COMMAND) -P CMakeFiles/grobner.dir/cmake_clean.cmake
.PHONY : src/math/grobner/CMakeFiles/grobner.dir/clean

src/math/grobner/CMakeFiles/grobner.dir/depend:
	cd /home/mku/tools/z3_59e9c87 && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/mku/share/tool_source/z3_mur /home/mku/share/tool_source/z3_mur/src/math/grobner /home/mku/tools/z3_59e9c87 /home/mku/tools/z3_59e9c87/src/math/grobner /home/mku/tools/z3_59e9c87/src/math/grobner/CMakeFiles/grobner.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : src/math/grobner/CMakeFiles/grobner.dir/depend

