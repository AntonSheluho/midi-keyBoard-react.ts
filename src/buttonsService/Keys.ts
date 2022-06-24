type KeyProps = {
    keyClass: string,
    keyStyle: string,
    keyName: string,
    name: string,
    keyCode: string,
    audio: object,
    key: string
}

export const keys: Array<KeyProps> = [
    {
        keyClass: 'key', 
        keyStyle: '0%', 
        keyName: 'A (До)',
        name: 'KeyA',
        keyCode: 'keyDo1',
        audio: new Audio('../audio/right_piano/do1.mp3'),
        key: 'A',
    },
    {
        keyClass: 'key', 
        keyStyle: '6.66%', 
        keyName: 'S (Ре)',
        name: 'KeyS',
        keyCode: 'keyRe1', 
        audio: new Audio('../audio/right_piano/re1.mp3'), 
        key: 'S'
    },
    {
        keyClass: 'key', 
        keyStyle: '13.32%', 
        keyName: 'D (Ми)',
        name: 'KeyD',
        keyCode: 'keyMi1',
        audio: new Audio('../audio/right_piano/mi1.mp3'),
        key: 'D'
    },
    {
        keyClass: 'key', 
        keyStyle: '19.98%', 
        keyName: 'F (Фа)',
        name: 'KeyF',
        keyCode: 'keyFa1', 
        audio: new Audio('../audio/right_piano/fa1.mp3'), 
        key: 'F'
    },
    {
        keyClass: 'key', 
        keyStyle: '26.64%', 
        keyName: 'G (Соль)',
        name: 'KeyG',
        keyCode: 'keySol1', 
        audio: new Audio('../audio/right_piano/sol1.mp3'), 
        key: 'G'
    },
    {
        keyClass: 'key', 
        keyStyle: '33.3%', 
        keyName: 'H (Ля)',
        name: 'KeyH',
        keyCode: 'keyLya1', 
        audio: new Audio('../audio/right_piano/lya1.mp3'), 
        key: 'H'
    },
    {
        keyClass: 'key', 
        keyStyle: '39.96%', 
        keyName: 'J (Си)',
        name: 'KeyJ',
        keyCode: 'keySi1', 
        audio: new Audio('../audio/right_piano/si1.mp3'), 
        key: 'J'
    },
    {
        keyClass: 'key', 
        keyStyle: '46.62%', 
        keyName: 'K (До)',
        name: 'KeyK',
        keyCode: 'keyDo2', 
        audio: new Audio('../audio/right_piano/do2.mp3'), 
        key: 'K'
    },
    {
        keyClass: 'key', 
        keyStyle: '53.28%', 
        keyName: 'L (Ре)',
        name: 'KeyL',
        keyCode: 'keyRe2', 
        audio: new Audio('../audio/right_piano/re2.mp3'), 
        key: 'L'
    },
    {
        keyClass: 'key', 
        keyStyle: '59.94%', 
        keyName: ': (Ми)',
        name: 'Semicolon',
        keyCode: 'keyMi2', 
        audio: new Audio('../audio/right_piano/mi2.mp3'), 
        key: 'Semicolon'
    },
    {
        keyClass: 'key', 
        keyStyle: '66.6%', 
        keyName: '" (Фа)',
        name: 'Quote',
        keyCode: 'keyFa2', 
        audio: new Audio('../audio/right_piano/fa2.mp3'), 
        key: 'Quote'
    },
    {
        keyClass: 'key', 
        keyStyle: '73.26%', 
        keyName: '| (Соль)',
        name: 'Backslash',
        keyCode: 'keySol2', 
        audio: new Audio('../audio/right_piano/sol2.mp3'), 
        key: 'Backslash'
    },
    {
        keyClass: 'key', 
        keyStyle: '79.92%', 
        keyName: '4 (Ля)',
        name: 'Numpad4',
        keyCode: 'keyLya2', 
        audio: new Audio('../audio/right_piano/lya2.mp3'), 
        key: 'Numpad4'
    },
    {
        keyClass: 'key', 
        keyStyle: '86.58%', 
        keyName: '5 (Си)',
        name: 'Numpad5',
        keyCode: 'keySi2', 
        audio: new Audio('../audio/right_piano/si2.mp3'), 
        key: 'Numpad5'
    },
    {
        keyClass: 'key', 
        keyStyle: '93.24%', 
        keyName: '6 (До)',
        name: 'Numpad6',
        keyCode: 'keyDo3', 
        audio: new Audio('../audio/right_piano/do3.mp3'), 
        key: 'Numpad6'
    },
    {
        keyClass: 'blackKey', 
        keyStyle: '4%', 
        keyName: 'W (До#)',
        name: 'KeyW',
        keyCode: 'blackKeyC1', 
        audio: new Audio('../audio/right_piano/do1D.mp3'), 
        key: 'W'
    },
    {
        keyClass: 'blackKey', 
        keyStyle: '10.8%', 
        keyName: 'E (Ре#)',
        name: 'KeyE',
        keyCode: 'blackKeyD1', 
        audio: new Audio('../audio/right_piano/re1D.mp3'), 
        key: 'E'
    },
    {
        keyClass: 'blackKey', 
        keyStyle: '24.1%', 
        keyName: 'T (Фа#)',
        name: 'KeyT',
        keyCode: 'blackKeyF1', 
        audio: new Audio('../audio/right_piano/fa1D.mp3'), 
        key: 'T'
    },
    {
        keyClass: 'blackKey', 
        keyStyle: '30.8%', 
        keyName: 'Y (Соль#)',
        name: 'KeyY',
        keyCode: 'blackKeyG1', 
        audio: new Audio('../audio/right_piano/sol1D.mp3'), 
        key: 'Y'
    },
    {
        keyClass: 'blackKey', 
        keyStyle: '37.5%', 
        keyName: 'U (Ля#)',
        name: 'KeyU',
        keyCode: 'blackKeyA1', 
        audio: new Audio('../audio/right_piano/lya1D.mp3'), 
        key: 'U'
    },
    {
        keyClass: 'blackKey', 
        keyStyle: '50.9%', 
        keyName: 'O (До#)',
        name: 'KeyO',
        keyCode: 'blackKeyC2', 
        audio: new Audio('../audio/right_piano/do2D.mp3'), 
        key: 'O'
    },
    {
        keyClass: 'blackKey', 
        keyStyle: '57.6%', 
        keyName: 'P (Ре#)',
        name: 'KeyP',
        keyCode: 'blackKeyD2', 
        audio: new Audio('../audio/right_piano/re2D.mp3'), 
        key: 'P'
    },
    {
        keyClass: 'blackKey', 
        keyStyle: '71%', 
        keyName: '{ (Фа#)',
        name: 'BracketRight',
        keyCode: 'blackKeyF2', 
        audio: new Audio('../audio/right_piano/fa2D.mp3'), 
        key: 'BracketRight'
    },
    {
        keyClass: 'blackKey', 
        keyStyle: '77.7%', 
        keyName: '7 (Соль#)',
        name: 'Numpad7',
        keyCode: 'blackKeyG2', 
        audio: new Audio('../audio/right_piano/sol2D.mp3'), 
        key: 'Numpad7'
    },
    {
        keyClass: 'blackKey', 
        keyStyle: '84.4%', 
        keyName: '8 (Ля#)',
        name: 'Numpad8',
        keyCode: 'blackKeyA2', 
        audio: new Audio('../audio/right_piano/lya2D.mp3'), 
        key: 'Numpad8'
    },
]