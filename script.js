/*

這個練習綜合了哪些JS內容?
- Data Structures (Object, Array)
- Destructing
- Spread Operators & Rest Parameters
- Short Circuiting

*/
const game = {
  team1: '中信兄弟',
  team2: '統一7-ELEVEn獅',
  players: [
    [
      '呂彥青',
      '陳家駒',
      '蘇緯達',
      '王威晨',
      '許基宏',
      '江坤宇',
      '岳東華',
      '詹子賢',
      '宋晟睿',
      '陳子豪',
    ],
    [
      '古林睿煬',
      '林岱安',
      '郭阜林',
      '吳桀睿',
      '林子豪',
      '林靖凱',
      '林祖傑',
      '林安可',
      '蘇智傑',
      '陳傑憲',
    ],
  ],
  score: '4:0',
  scored: ['詹子賢', '許基宏', '詹子賢', '蘇緯達'],
  date: '2021/09/28',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 1.45,
  },
}

// 1. 為每支球隊創建一個球員陣列（變數 'players1' 和'players2')
const [players1, players2] = game.players

// 2. 任何球員陣列中的第一個球員是投手，其他球員是場上球員。 對於兄弟象，使用投手姓名創建一個變數 ('pitcher')，並創建一個包含所有其餘場上球員的陣列 ('fieldPlayers')
const [pitcher, ...fieldPlayers] = players1

// 3. 創建一個陣列 'allPlayers' 包含兩支球隊的所有球員
const allPlayers = [...players1, ...players2]

// 4、本場比賽，兄弟象使用了3名替補球員。 因此，創建一個新陣列（'players1Final'），其中包含所有原始兄弟象球員以及 '蔡齊哲'、'吳俊偉' 和 '李振昌'
const players1Final = [...players1, '蔡齊哲', '吳俊偉', '李振昌']

// 5. 基於 game.odds 物件，創建每一個變數（稱為“team1”、“draw”和“team2”）
const { team1, x: draw, team2 } = game.odds

// 6. 編寫一個函數 ('printGoals')，它接收任意數量的球員姓名（不是陣列），並將每個球員姓名打印到控制台 )
const printGoals = function (...players) {
  console.log(players)
}

// 7. 賠率越低的隊伍越有可能獲勝。 打印到控制台哪個團隊更有可能獲勝，而不使用 if/else 語句或三元運算符。
team1 < team2 && console.log('中信兄弟獲勝機率高一點')
team1 > team2 && console.log('統一7-ELEVEn獅獲勝機率高一點')
