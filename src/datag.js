
   

    const cards = [
        {
         "id":1,
        "kor": "예지",
        "eng": "Yeji",
        "company": "예지네"
        },

        {
            "id":2,
           "kor": "서준",
           "eng": "Seojun",
           "company": "NonceClassic"
           },

           {
            "id":3,
           "kor": "지훈",
           "eng": "jihoon",
           "company": "Samsung"
           },

           {
            "id":4,
           "kor": "태이",
           "eng": "Taei",
           "company": "Pilgrim"
           },

           {
            "id":5,
           "kor": "요지",
           "eng": "Yoji",
           "company": "예지"
           },

           {
            "id":6,
           "kor": "예지",
           "eng": "Yeji",
           "company": "예네"
           }

    ]
 

 const getCardByNo = no => {
    const array = cards.filter(x => x.no === no);
    if (array.length === 1) {
      return array[0];
    }
    return null;
  }

  export default {
    cards,
    getCardByNo
  };