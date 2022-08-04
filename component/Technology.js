const get = (req,res)=>{
    res.send([
        {
            "id": 21,
            "title": "First Webb Telescope image reveals earliest galaxies formed after Big Bang ",
            "Image": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAZt1dp.img?w=647&h=363&m=6",
            "category": "Technology",
            "description": "US President Joe Biden on Monday released one of the James Webb Space Telescope's first images in a preview event at the White House in Washington "
          },
          {
            "id": 22,
            "title": "Amazon’s smart grocery carts are coming to some Whole Foods stores",
            "Image": "https://image.cnbcfm.com/api/v1/image/107087167-1657577323174-New_Version_of_the_Dash_Cart_Screen.jpg?v=1657577387&w=630&h=354",
            "category": "Technology",
            "description": "Amazon is expanding its smart shopping carts to a Whole Foods store in Massachusetts, the company said on Monday. Amazon will initially roll out Dash Carts at a Whole Foods in Westford, Massachusetts, northwest of Boston, in the coming months, before launching the technology at additional locations."


            
            // "description": "The cosmos is as beautiful as it is mysterious. Every once in a while, the universe puts on a show for us humans here on Earth to enjoy. Sometimes, it is an eclipse, sometimes it is a meteor shower. But no matter what event, it is an occasion that you should not miss. Here, we have put together a list of celestial events that we can look forward to seeing in 2022.After the partial eclipse visible in certain parts of South America on April 30 this year, there is only one more solar eclipse left for us to witness: a partial one that will happen on October 25 and will be visible in Europe, Northeast Africa, the Middle East and parts of Asia, including India. The greatest part of the eclipse will be visible to viewers in India so save the date on your calendar.The total lunar eclipse that occurred on May 16 this year will not be the only one this year: another total lunar eclipse is predicted to happen once again on November 8 this year. However, just like the previous full lunar eclipse, it is unlikely that this one would be visible from India. But just like the one in May, the lunar eclipse in November will also presumably be live-streamed by multiple sources, allowing you to catch a glimpse."
          },
         
          {
            "id": 52,
            "title": "Why I fell in love with Microsoft’s Surface Laptop Studio despite its shortcomings ",
            "Image": "https://images.indianexpress.com/2022/05/K1.jpg",
            "category": "technology",
            "description": "As I was waiting for someone at a Delhi hotel recently, I saw a gentleman coming my way. He sat next to me and curiously asked about the laptop I was using. “It’s a Surface Laptop Studio,” I replied. “Does Microsoft make its own laptops?” He admitted he wasn’t aware of the Surface brand but told me he liked the form factor of the Surface Laptop Studio. “It’s different from my MacBook Pro,” said the man who introduced himself as the owner of an architectural firm. This conversation just reinforced my belief that there will be takers for Microsoft’s experimental Surface Laptop Studio, which blends certain elements of the desktop Surface Studio and the premium 2-in-1 Surface Book. It’s a mobile workstation that’s also a sketching slate and a portable home theater. I have been using the Surface Laptop Studio for a few days, and I am in love with this device even though it is not perfect. Here is my review."
          },
          
          
          
          {
            "id": 23,
            "title": "iPhone 14 likely to cost $100 more than its predecessor, says report",
            "Image": "https://bsmedia.business-standard.com/_media/bs/img/article/2021-12/31/full/1640958034-2414.jpg?im=Resize,width=640",
            "category": "Technology",
            "description": "The upcoming iPhone 14, which is all set to be unveiled this September, is likely to be $100 more costlier than iPhone 13, says a new report.Wedbush Securities analyst Dan Ives said the firm believes a $100 price increase is coming for the iPhone 14, AppleInsider reported citing the Sun.Prices have been increasing across the whole supply chain, and Cupertino needs to pass these costs to the consumer on this release, the analyst was quoted as saying."
          },
          {
            "id": 24,
            "title": "8 ways the Elon Musk-Twitter saga could end",
            "Image": "https://image.cnbcfm.com/api/v1/image/107062466-16528020832022-05-17t135939z_2039150176_rc2hzt9h8dpw_rtrmadp_0_twitter-m-a-musk.jpeg?v=1652802149&w=630&h=354",
            "category": "Technology",
            "description": "In the latest twist in the Elon Musk-Twitter saga, the world’s richest man told the social media company he no longer intends to buy it. Twitter chairman Bret Taylor promptly fired back that the company intends to go to court to enforce the $44 billion deal’s closure at the agreed upon price and terms."
          },
          
    ])
}

module.exports.apiController = get;