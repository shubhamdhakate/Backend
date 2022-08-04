const get = (req,res)=>{
    res.send([
        {
            "id": 51,
            "title": "Hrithik Roshan turns photographer for rumoured ladylove Saba Azad, are they vacationing in Paris?",
            "Image": "https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2022/07/08/1062632-hrithik-roshan-saba-aza.gif",
            "category": "bollywood",
            "description":"Bollywood superstar Hrithik Roshan and Saba Azad are all over in the news for their blooming romance. While they have not confirmed dating each other, the duo is said to be seeing each other for a while now. Now, as per the latest buzz, Hrithik and Saba are spending ample time together in Paris. "
          },
          {
            "id": 52,
            "title": "iOS 16 now available public beta testers, what it means and why you should wait",
            "Image": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAZtylc.img?w=647&h=363&m=6",
            "category": "technology",
            "description": "Apple has started rolling iOS 16 to public beta testers. After releasing the iPhone operating system to developers, the latest stage of the rollout will help Apple learn more about iOS 16 as it will get feedback from regular beta testers. Once it is over, the company will start rolling out the OS to regular users in October or November"
          },
          {
            "id": 46,
            "title": "Global food prices may be falling, but economist warns Asia's food costs could still soar",
            "Image": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAZsA6e.img?w=768&h=402&m=6",
            "category": "food",
            "description": "Food prices worldwide fell for the third straight month in June, according to the United Nations Food and Agriculture Organization (FAO). But prices are still near historic highs as a result of Russia's invasion of Ukraine.FAO warned that while food prices fell in June, factors that drove global prices high in the first place are still at play.Singapore, South Korea, the Philippines, and India will see the highest increases in food prices in the second half of this year, a Nomura economist said."
          },
          {
            "id": 58,
            "title": "Stocks to buy today: HPCL, Jubilant Food, Infosys, Vedanta, HCL Tech among list of 20 shares for profitable trade on July 12",
            "Image": "https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2022/07/12/189272-business-g984a360891920.jpg?itok=dKxW6kur&c=218997e067c5e602b00da27bd2c4108d",
            "category": "mix",
            "description": "The Indian markets traded lackluster on Monday and ended almost on a flat note, taking a breather after the recent surge.Initially, the benchmark opened lower, tracking mixed global sentiment and a sharp cut in the IT majors post TCS numbers however outperformance of the banking pack capped the downside. And, buying in auto, metal and oil & gas space further trimmed the losses as the day progressed."
          },
          // 
          {
            "id": 55,
            "title": "Claire Taylor: The question-mark hanging over the future of farming and food production",
            "Image": "https://s.yimg.com/ny/api/res/1.2/wnDeb.GGRHLqwY1Pcday_w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTYzOTtjZj13ZWJw/https://s.yimg.com/uu/api/res/1.2/M68ZXHT5AAxFhDAwHdKz1A--~B/aD00MTM7dz02MjA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/herald_scotland_359/bb46576f86064179f6303bf26137067d",
            "category": "mix",
            "description": "THE cost-of-living crisis has turned the nation’s focus to the cost of food, but those tasked with producing it are bearing the brunt of agricultural inflation costs which make general inflation costs pale in comparison.."
          },
    ])
}

module.exports.apiController = get;