const yogaData = [
  {
    id: 1,
    name: "Mountain",
    description: "A foundational pose to improve posture and balance.",
    gif: "https://www.verywellfit.com/thmb/YPjV_SOQT2w82J9ghQ8O61JoZmo=/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/Fitness_Gif-1500x1000-sun-salutation-1-5919fe5f5f9b58f4c09ca380.gif",
    video: "https://youtu.be/2HTvZp5rPrg"
  },
  {
    id: 2,
    name: "Downward Dog",
    description: "A rejuvenating stretch that strengthens the arms and legs.",
    gif: "https://i.pinimg.com/originals/60/d8/6a/60d86af221f766ae8ff593c1f936387e.gif",
    video: "https://youtu.be/j97SSGsnCAQ"
  },
  {
    id: 3,
    name: "Warrior",
    description: "A powerful standing pose to improve focus and endurance.",
    gif: "https://www.verywellfit.com/thmb/9-QR2l0FKxnpDH2uNWLtKxAy0kI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Verywell-03-3567198-Warrior2-598a10d4d963ac0011fc9d72.gif",
    video: "https://youtu.be/NjD0bTgRxIs"
  },
  {
    id: 4,
    name: "Tree",
    description: "A balancing pose that strengthens the legs and opens the hips.",
    gif: "https://i.pinimg.com/originals/bd/e1/aa/bde1aa43224edbc15fcaed511347e98b.gif",
    video: "https://www.bing.com/videos/riverview/relatedvideo?q=tree+yoga+pose+video&mid=52934454DFCFED56834B52934454DFCFED56834B&FORM=VIRE"
  },
  {
    id: 5,
    name: "Child's",
    description: "A restorative pose for relaxation and stress relief.",
    gif: "https://www.verywellfit.com/thmb/EjwZhV4bRMIU7A-cWYGaVRMhyIE=/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/Verywell-04-2704746-ChildsPosecopy-598b7d0b68e1a2001183ad9b.gif",
    video: "https://www.bing.com/videos/riverview/relatedvideo?q=childs+yoga+pose+video&mid=E593EE0B80E2452CE0C8E593EE0B80E2452CE0C8&FORM=VIRE"
  },
  {
    id: 6,
    name: "Bridge",
    description: "A backbend pose that strengthens the spine and opens the chest.",
    gif: "https://media.post.rvohealth.io/wp-content/uploads/sites/2/2019/05/bridge.gif",
    video: "https://www.bing.com/videos/riverview/relatedvideo?q=bridge+yoga+pose+video&mid=E63A532039494216FB35E63A532039494216FB35&FORM=VIRE"
  },
  {
    id: 7,
    name: "Camel",
    description: "A deep backbend to improve spinal flexibility and relieve tension.",
    gif: "https://media.post.rvohealth.io/wp-content/uploads/sites/2/2019/05/bridge.gif",
    video: "https://www.bing.com/videos/riverview/relatedvideo?q=camel+yoga+pose+video&mid=54CCA42367DA641CD9A454CCA42367DA641CD9A4&FORM=VIRE"
  },
  {
    id: 8,
    name: "Triangle",
    description: "A pose that stretches the legs and torso and improves balance.",
    gif: "https://www.verywellfit.com/thmb/Ipv6ptTGRxAdItSBIiTi6FKQCB8=/1500x1000/filters:fill(FFDB5D,1)/Verywell-3-3567220-TrianglePose01-727-598b72a268e1a20011823490.gif",
    video: "https://www.bing.com/videos/riverview/relatedvideo?q=triangleyoga+pose+video&mid=E6F7C2D9D5D1E9C876FAE6F7C2D9D5D1E9C876FA&FORM=VIRE"
  },
  {
    id: 9,
    name: "Seated Forward Bend",
    description: "A calming pose that stretches the hamstrings and spine.",
    gif: "https://th.bing.com/th/id/R.27e81c20cdca70d3172f66f49f902ea2?rik=milmQHP5tEWEbA&riu=http%3a%2f%2fwww.yogajournal.com%2fwp-content%2fuploads%2fsites%2f17%2f2016%2f02%2fseatedforwardbend-march.gif&ehk=WQupc8uKnCZZj%2fGBUeVkbp8BEpop3ZeDPiTjlUq52rc%3d&risl=&pid=ImgRaw&r=0",
    video: "https://www.bing.com/videos/riverview/relatedvideo?q=seated+forward+bendyoga+pose+video&mid=701D0D6294DE8391EA0D701D0D6294DE8391EA0D&FORM=VIRE"
  },
  {
    id: 10,
    name: "Cat-Cow",
    description: "A gentle flow between two poses to warm up the spine.",
    gif: "https://www.verywellfit.com/thmb/2ekGNx-hLMl1lEVSFxX9eZjAsrY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cat-cow-5989fd730d327a00115d0515.gif",
    video: "https://www.bing.com/videos/riverview/relatedvideo?q=cat+cowyoga+pose+video&mid=59304C1E2564642ACB2A59304C1E2564642ACB2A&FORM=VIRE"
  },
  {
    id: 11,
    name: "Cobra",
    description: "A backbend that opens the chest and strengthens the back muscles.",
    gif: "https://www.fitnessrobust.com/wp-content/uploads/2021/09/Bhujangasana.gif",
    video: "https://www.bing.com/videos/riverview/relatedvideo?q=cobra+yoga+pose+video&mid=367D00514BA76DE3D573367D00514BA76DE3D573&FORM=VIRE"
  },
  {
    id: 12,
    name: "Boat",
    description: "A core-strengthening pose that improves balance and concentration.",
    gif: "https://worldpeaceyogaschool.com/blog/wp-content/uploads/2016/09/Boat-Pose.gif",
    video: "https://www.bing.com/videos/riverview/relatedvideo?q=boat+babyoga+pose+video&mid=727E4179EBB094024B23727E4179EBB094024B23&FORM=VIRE"
  },
  {
    id: 13,
    name: "Happy Baby",
    description: "A relaxing pose that releases tension in the lower back and hips.",
    gif: "https://post.healthline.com/wp-content/uploads/2020/11/400x400_Try_This_Yoga_Poses_to_Create_Your_Ideal_Morning_Routine_Happy_Baby.gif",
    video: "https://www.bing.com/videos/riverview/relatedvideo?q=happy+babyoga+pose+video&mid=CE19E4FA586ED1E17112CE19E4FA586ED1E17112&FORM=VIRE"
  },
  {
    id: 14,
    name: "Plank",
    description: "A foundational core pose that builds strength and endurance.",
    gif: "https://i.pinimg.com/originals/3c/97/7a/3c977a2a8e3462873f8445ecb5b54f69.gif",
    video: "https://www.bing.com/videos/riverview/relatedvideo?q=plankyoga+pose+video&mid=10F4EE41070AD07C0BB110F4EE41070AD07C0BB1&FORM=VIRE"
  },
  {
    id: 15,
    name: "Butterfly",
    description: "A hip opener that stretches the inner thighs and groin.",
    gif: "https://cdn.yogajournal.com/wp-content/uploads/2019/08/baddha.gif?width=730",
    video: "https://www.bing.com/videos/riverview/relatedvideo?q=butterfly+yoga+pose+video&mid=FB623D88964F3B48F6FBFB623D88964F3B48F6FB&FORM=VIRE"
  },
  {
    id: 16,
    name: "Bow",
    description: "A deep backbend that opens the chest and strengthens the back.",
    gif: "https://blog.anaheart.co.uk/wp-content/uploads/2018/07/yoga-bow-pose-800x480.png",
    video: "https://www.bing.com/videos/riverview/relatedvideo?q=bow+yoga+pose+video&mid=707FC6F613078410157F707FC6F613078410157F&FORM=VIRE"
  },
  {
    id: 17,
    name: "Pigeon",
    description: "A hip opener that releases tension in the lower back and hips.",
    gif: "https://www.verywellfit.com/thmb/s0t8c-ESrynr3D4bpKDI6ZTNLtM=/1333x1000/smart/filters:no_upscale()/Verywell-07-3567179-Pigeon02-133-598b72f5b501e80012e733ab.gif",
    video: "https://www.bing.com/videos/riverview/relatedvideo?q=pigeon+yoga+pose+video&mid=9A55757236F028DFB4EF9A55757236F028DFB4EF&FORM=VIRE"
  },
  {
    id: 18,
    name: "Corpse",
    description: "A relaxation pose to calm the mind and reduce stress.",
    gif: "https://post.healthline.com/wp-content/uploads/2018/07/Corpse-Pose-Savasana.gif",
    video: "https://www.bing.com/videos/riverview/relatedvideo?q=corpse+yoga+pose+video&mid=842AF683741B5C23017D842AF683741B5C23017D&FORM=VIRE"
  },
];

export default yogaData;
