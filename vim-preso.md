<!-- (use markoff for display) -->
<!-- Enable KeyCastr -->
# Vim - A Whirlwind Tour
1. Why Vim?
  * Available in most editors and operating systems
  * Visual Studio, Emacs, and Sublime Text all have support
  * Available as a standalone editor on Linux, Mac, and Windows
  * Vim has NO competition as the premier way to efficiently and quickly edit text
2. [Download Vim!](https://vim.sourceforge.io/download.php)
![alt text](https://github.com/tltjr/vim/raw/master/vim.png)

# Modes
  * modes - normal, visual, edit

  ![alt text](https://github.com/tltjr/vim/raw/master/modes.png)
  * enter insert with 'i' (we'll see some more advanced options later)
  * insert mode is the ONLY mode most text editors have
  * return to normal node with ESC
  * normal mode allows us to use the keyboard for navigating the file
  * what's the advantage of this?
  * ability to edit and navigate code from the same finger position (much, MUCH, faster)   

# Movement in a File
1. searching with / and ? 
  * search from command line
2. \* and # with n, N 
  * find the word under the cursor
3. :{linenumber}
  * to go to any line number
4. gg, G (gg = G)
  * top or end of file
5. Ctrl + F or B, up or back page
6. Ctrl + U or D, up or back half a page

### Examples
##### using app-state.ts 
1. move to getNextMonth using a variety of approaches
2. show gg and G
3. Touch on using ? rather than / and how n and N work
4. Also show Ctrl + F or B and Ctrl + U or D

# Movement Within a Line
1. hjkl movement 
  * glorified arrow keys
2. move with w or b
  * by word (forward or back)
3. use f or F to search for a char

#### Sample Code to Navigate
1. Try nav by letter, space, and period
2. Use F to search backward and use t and f
```python
def __eq__(self, other):
    return self.x == other.x and self.y == other.y
```

# Editing
  * x delete a character
  * ~ capitalize
  * . repeat last action
  * u undo, ctrl+r redo
  * r change one character

# Cut, Copy, and Paste
1. Cut operations are done with d (delete) or c (correct), which places you in
   insert mode
2. Copy is thought of as 'Yank' in Vim and therefore done with y
3. Paste is done with p (which may actually represent 'Put', but it scarcely
   matters)
4. What am I cutting or copying???
  * Full line: dd, yy, or cc
  * Cursor to the end of the line: {c|d|y}$
  * Cursor to the end of the word: {c|d|y}{num}w
  * Cursor to a character: {c|d|y}{t|f}{char}
  * Text objects: {c|d|y}{i|a}{'|"|t|w|etc..|

#### Sample Code to Cut, Copy, and Paste
```javascript
export const reducer =
  (stateMap: Immutable.Map<string, any> = initialState, a: IAppAction)
  => {
    switch (a.type) {
      case 'REFRESH_VARIABLES':
        stateMap = stateMap.set('startBal', a.payload.startBal);
        stateMap = stateMap.set('startDate', a.payload.startDate);
        return stateMap.set('endDate', a.payload.endDate);
      case 'UPDATE_SETTINGS_SUCCESSFUL':
        return stateMap.set('settings', a.payload.settings);
      case 'BILLS_RECEIVED':
        return stateMap.set('bills', a.payload.bills);
      case 'BILLS_UPDATED':
        return stateMap.set('bills', a.payload.bills);
      case 'DATA_RETRIEVED':
        stateMap = stateMap.set('settings', a.payload.settings);
        return stateMap.set('bills', a.payload.bills);
      default:
        return stateMap;
      }
  };
```

# ex command
  * history of ex
    1. ex is a line editor for Unix originally written by Bill Joy in 1976
    2. It was designed to be command line only use
    3. Was eventually given a visual interface which became the vi editor
  * :w :q
  * :e
  * :sav
  * :pwd
  * :cd
  * :%s/target/replace/g
  * :.,+5s/target/replace/g
  * :.,$s/target/replace/g
  * :g/pattern/

# .vimrc
### Review my .vimrc

# Plugins

# remapping esc:
  windows - sharp keys
  mac - sys prefs - keyboard - Modifier Keys

# Macros
stick around for my other presentation!

# Learn More!
Suggestions for improving
  start with hjkl, d and y, and u
  add etc...
vimcasts
books?
just start using it!
vim golf

