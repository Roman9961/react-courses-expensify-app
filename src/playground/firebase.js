database.ref('expenses').on('child_changed', (snapshot)=>{
    console.log(snapshot.key);
});

database.ref('expenses').on('child_added', (snapshot)=>{
    console.log(snapshot.key);
});

//
// database.ref('expenses').push({
//     description: 'Gum',
//     note: 'test note4',
//     amount: 10350,
//     createdAt: 9879898996565665
// })
// database.ref('expenses').on('value',(snapshot)=>{
//     const expenses =[];
//     snapshot.forEach((snapShotChild)=>{
//         expenses.push({
//             id: snapShotChild.key,
//             ...snapShotChild.val()
//         });
//     });
//     console.log(expenses);
// });
// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, React'
// });


// database.ref('notes').set(notes);
// const onValueChanged = database.ref().on('value',(snapshot)=>{
//     const person = snapshot.val();
//     console.log(`${person.name} is a ${person.job.title} at ${person.job.company}`)
// })

// database.ref('job')
//     .once('value')
//     .then((snapshot)=>{
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e)=>{
//     console.log(e);
// });

// database.ref().set({
//     name:'Roman',
//     age:26,
//     stressLevel:6,
//     job:{
//         title:'Software developer',
//         company: 'Google'
//     },
//     location:{
//         city: 'Kiev',
//         country: 'Ukraine'
//     }
// }).then(()=>{
//     console.log('Data saved!');
// }).catch((error)=>{
//     console.log('Data has not been saved!');
// });
// database.ref('isSingle')
//     .remove()
//     .then(()=>{
//     console.log('isSingle removed');
//     }).catch((e)=>{
//         console.log('isSingle not removed');
//     });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seatle'
// });