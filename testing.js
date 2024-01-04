 const categories = [{
    id: 1,
    name: 'Web Application'
  }, {
    id: 2,
    name: 'Digital Marketing'
  }, {
    id: 3,
    name: 'Design'
  }]
 
  
courses = [{
    id: 1,
    name: 'Web Development',
    category_id: 1
  }, {
    id: 2,
    name: 'Mobile Development',
    category_id: 1
  }, {
    id: 3,
    name: 'Frontend Development',
    category_id: 1
  }, {
    id: 4,
    name: 'Devop',
    category_id: 1
  }, {
    id: 5,
    name: 'Getting start your bussinese with AI',
    category_id: 2
  }, {
    id: 6,
    name: 'Using AI to improve your bussinese',
    category_id: 2
  }, {
    id: 7,
    name: 'Getting Start using Design tool using PS and AI',
    category_id: 3
  }, {
    id: 8,
    name: 'How to use PS with AI plugin',
    category_id: 3
  }]
  

  lessons = [{
    id: 1,
    number: 1,
    title: 'Web Development Lesson 1',
    course_id: 1
  }, {
    id: 2,
    number: 2,
    title: 'Web Development Lesson 2',
    course_id: 1
  }, {
    id: 3,
    number: 3,
    title: 'Web Development Lesson 3',
    course_id: 1
  }, {
    id: 4,
    number: 1,
    title: 'Mobile Development Lesson 1',
    course_id: 2
  }, {
    id: 5,
    number: 2,
    title: 'Mobile Development Lesson 2',
    course_id: 2
  }, {
    id: 6,
    number: 3,
    title: 'Mobile Development Lesson 3',
    course_id: 2
  }, {
    id: 7,
    number: 1,
    title: 'Frontend Development Lesson 1',
    course_id: 3
  }, {
    id: 8,
    number: 2,
    title: 'Frontend Development Lesson 2',
    course_id: 3
  }, {
    id: 9,
    number: 3,
    title: 'Frontend Development Lesson 3',
    course_id: 3
  }, {
    id: 10,
    number: 4,
    title: 'Frontend Development Lesson 4',
    course_id: 3
  }, {
    id: 11,
    number: 1,
    title: 'How to use PS with AI plugin Lesson 1',
    course_id: 1
  }, {
    id: 12,
    number: 2,
    title: 'How to use PS with AI plugin Lesson 2',
    course_id: 1
  }, {
    id: 13,
    number: 3,
    title: 'How to use PS with AI plugin Lesson 3',
    course_id: 1
  }]


//   for (var i=0; i<categories.length; i++){
//     console.log("Result:",[categories[i]] )
//   }

// const myCategory = categories

// console.log('some Array',myCategory)



// for (var i=0; i<courses.length;i++){
// const filterCategory = categories.find(cat=>cat.id===courses.category_id)

// let newlesson = lessons.slice(0,3);

//     // console.log(courses[i])
//     console.log("category:",filterCategory)
//     // console.log("lesson:",newlesson)
//     // console.log()
//     // console.log()
//     // console.log()

//     // let arrayobject = [courses[i],filterCategory,newlesson]
//     // console.log(arrayobject)
// }

courses.forEach(function(course,i){
    const filterCategory = categories.find(cat=>cat.id===course.category_id)
    let newlesson = lessons.filter(les=>les.course_id==course.id);
    // const result 


    const result= {
        courses:course.id,
        categories:filterCategory,
        lessons:newlesson
    }
    console.log(result)
    // let arrayobject = [courses,filterCategory,newlesson]
    // console.log(arrayobject)

});
