const get = (req,res)=>{
    res.send([
          {
            "id": 33,
            "title": " You must do Exercise mood, boost energy levels",
            "Image": "https://th.bing.com/th/id/R.7bc92eb826de8a67394a863a7e09caf0?rik=Xb%2ffz%2bk6LgvErw&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fc%2f5%2f8%2f53692.jpg&ehk=jCMeEmyOm2%2fycISjOl%2bDWFLgFUFvxEd8UC7Kd6OZ8eo%3d&risl=&pid=ImgRaw&r=0",
            "category": "Fitness",
            "description": "Exercise has been around for millennia. According to some records, it was developed in Northern India over 5,000 years ago, and according to data published in 2004 in the journal Alternative Therapies in Health and Medicine, an estimated 15 million American adults have used yoga at least once in their lifetime.."
          },
          {
            "id": 34,
            "title": "Physical Activity and Covid19 Outcomes",
            "Image": "https://www.trainabsolute.com/wp-content/uploads/2021/04/covidandexerciseoutcomes-1024x684.jpg",
            "category": "Fitness",
            "description": "The guidelines, which are the same as the World Health Organization guidelines and used by many nations, are based on research supporting the ability of physical activity to boost immune function, reduce systemic inflammation, increase pulmonary and cardiovascular health, and improve mental health. "
          },
          {
            "id": 35,
            "title": "Flexibility training ",
            "Image": "https://bigandripped.com/wp-content/uploads/Flexibility-training.jpg",
            "category": "Fitness",
            "description": "Whether people engage in light exercise, such as going for a walk, or high intensity activities, for example, uphill cycling or weight training, regular exercise provides a huge range of benefits for the body and mind. "
          },
          {
            "id": 37,
            "title": "Covers articles that help you to learn how to create the workout routine and diet plan you need to lose fat ",
            "Image": "https://th.bing.com/th/id/R.8fd6789d1bcb23426103793c392234c7?rik=94MeXAjbKOVCVQ&riu=http%3a%2f%2fbethanyathleticclub.com%2fwp-content%2fuploads%2f2020%2f02%2ftypes-of-exercise-2-1030x579.png&ehk=UXE3gbnK3KOxSENdSK3YAhax5ivuZy2dRsgR4Noa0Bw%3d&risl=&pid=ImgRaw&r=0",
            "category": "mix",
            "description": "o one will understand you or your body the way you do so make sure you listen to it, protect it, do good things for it and celebrate it,” they saidYoga is now the preferred choice of many, to stay fit, active and agile. It helps in numerous ways, be it in improving flexibility, strength and posture, or reducing stress and providing a sense of calm. Nutrition and diet are an important part of fitness along with physical exercise. On that account, it becomes necessary to understand whether yoga should be done on an empty stomach or notAnshuka Parwani, a yoga expert, and Pooja Makhija, a nutritionist took to Instagram to talk about this dilemma that many face.Pooja believes that it’s important to have something before starting with your exercise in the morning. It should be quite light and not too heavy to kickstart your metabolism.While both have contrasting opinions, they strongly agreed and upheld the point that you know your body better than anyone else. Hence, it’s important to observe and understand what your body is trying to tell you and do as one may deem fit. They said, if practising yoga on an empty stomach is suiting you better, do that. On the other hand, if it feels like you need something to get a better start, follow that as a part of your routine.    "
          },
          {
            "id": 36,
            "title": " Covers articles that help you to learn how to create the workout routine and diet plan you need to lose fat",
            "Image": "https://th.bing.com/th/id/R.8fd6789d1bcb23426103793c392234c7?rik=94MeXAjbKOVCVQ&riu=http%3a%2f%2fbethanyathleticclub.com%2fwp-content%2fuploads%2f2020%2f02%2ftypes-of-exercise-2-1030x579.png&ehk=UXE3gbnK3KOxSENdSK3YAhax5ivuZy2dRsgR4Noa0Bw%3d&risl=&pid=ImgRaw&r=0",
            "category": "Fitness",
            "description": "Sprint races can be of various distances from 50 - 400m. The three formats used for the Olympics are: 100m, 200m and 400m. The 100m and 400m races are also conducted in a relay format where a team of four each run a leg and pass a baton from one runner to the next."
          },
    ])
}

module.exports.apiController = get;