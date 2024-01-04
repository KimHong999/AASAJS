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

  const lastresult=[]

  for(const cate of categories){
    const result=[];
    for(const cou of courses){
        if(cou.category_id===cate.id){
            const filterlesson = lessons.filter(les=>les.course_id===cou.id)
            result.push({
                ...cou,
                lessons:filterlesson
            })
        }
    }
    lastresult.push({
        ...categories,
        courses:result.filter(cou=>cou)
    })
   
  }
 console.log(JSON.stringify(lastresult))

// categories.forEach(category=>{
//     // const filterCourse = courses.filter(cou=>category.id===cou.category_id)


//     const result=[];
//     const showCourse = courses.forEach(course=>{
//         if(course.category_id===category.id){
//           const filterlesson = lessons.filter(les=>les.course_id===course.id) 
//           result.push ({
//             ...course,
//             lessons:filterlesson
//           } )
//         }   
        
//       // console.log(result)
//     })

//     // const showCourse = filterCourse.map(course=>{
//     //   const filterlesson = lessons.filter(les=>les.course_id===course.id)
//     //   return result ={
//     //     ...course,
//     //     lessons:filterlesson
//     //   }
//     // })


//     const lastresult ={
//       ...category,
//       showCourse:result.filter((course)=>course)
//     }
//     console.log(JSON.stringify(lastresult))
    

   
//     // let arrayobject = [courses,filterCategory,newlesson]
//     // console.log(arrayobject)

// });
