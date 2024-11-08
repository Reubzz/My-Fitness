import React from 'react';

const YogaExercises = () => {
  const yogaPoses = [
    {
      id: 1,
      name: "Downward Dog",
      image: "https://i.pinimg.com/originals/39/f7/6e/39f76eca2b51783ee84bda2bd96544e3.gif", 
      benefits: "Stretches the hamstrings, calves, and spine."
    },
    {
      id: 2,
      name: "Child's Pose",
      image: "https://media.post.rvohealth.io/wp-content/uploads/2023/05/childs-pose.gif", 
      benefits: "Helps release tension in the back and neck."
    },
    {
      id: 3,
      name: "Cobra Pose",
      image: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2021/08/2265-Childs_Pose-400x400-exercise.gif", 
      benefits: "Stretches the chest, shoulders, and spine."
    },
    {
      id: 4,
      name: "Cat-Cow Pose",
      image: "https://www.verywellfit.com/thmb/2ekGNx-hLMl1lEVSFxX9eZjAsrY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cat-cow-5989fd730d327a00115d0515.gif", // Replace with actual image URL
      benefits: "Improves spine flexibility and relieves stress."
    },
    {
      id: 5,
      name: "Warrior II",
      image: "https://www.verywellfit.com/thmb/9-QR2l0FKxnpDH2uNWLtKxAy0kI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Verywell-03-3567198-Warrior2-598a10d4d963ac0011fc9d72.gif", // Replace with actual image URL
      benefits: "Strengthens the legs and opens the hips."
    },
    {
      id: 6,
      name: "Tree Pose",
      image: "https://i.pinimg.com/originals/bd/e1/aa/bde1aa43224edbc15fcaed511347e98b.gif", 
      benefits: "Improves balance and strengthens the legs."
    },
    {
      id: 7,
      name: "Bridge Pose",
      image: "https://media.post.rvohealth.io/wp-content/uploads/2017/10/Bridge-Pose.gif", 
      benefits: "Strengthens the glutes and lower back."
    },
    {
      id: 8,
      name: "Seated Forward Bend",
      image: "https://media.post.rvohealth.io/wp-content/uploads/2023/05/Seated-Forward-Bend.gif", 
      benefits: "Stretches the hamstrings and lower back."
    },
    {
      id: 9,
      name: "Lotus Pose",
      image: "https://media.giphy.com/media/IzSUsRIput1M4/giphy.gif", 
      benefits: "Promotes calmness and flexibility in the hips."
    }
  ];

  return (
    <div className="yoga-exercises">
      <h2>Yoga Poses for Menstrual Pain Relief</h2>
      <div className="yoga-grid">
        {yogaPoses.map((pose) => (
          <div className="yoga-item" key={pose.id}>
            <h3>{pose.name}</h3>
            <img src={pose.image} alt={pose.name} />
            <p>{pose.benefits}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YogaExercises;
