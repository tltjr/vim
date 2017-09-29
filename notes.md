# Intro
1. cover slide
3. [Download Vim!](https://vim.sourceforge.io/download.php)
4. Video???

# Modes
modes - normal, visual, edit
enter insert with 'i'
return to normal node with ESC
what's the advantage of this?
  - ability to edit and navigate code from the same finger position (much, MUCH, faster)   

# Movement 
hjkl movement
searching with / and ?
* and # with n, N
:linenumber
move with w or b
0, $
gg, G (gg = G)
moving inside lines - f, F with ; and ,
Ctrl + F or B, up or back page
Ctrl + U or D, up or back half a page

# Editing
dd,yy,cc and p
other ways to y, d, c
  - common single targets cw c$, yw, y$
  - text objects (yiw, ca', da", dat)
x delete a character
~ capitalize
. repeat last action
u undo, ctrl+r redo
r change one character

* ex command
history of ex
:w :q
:w saves
:e
:pwd
:%s/target/replace/g
:.,+5s/target/replace/g

* Advanced Ways to Enter Insert Mode
other ways to enter insert, I, a, A, o, O

* .vimrc
colorschemes
line numbers

remapping esc:
  windows - sharp keys
  mac - sys prefs - keyboard - Modifier Keys

* Plugins

* Macros
stick around for my other presentation!

vim golf
