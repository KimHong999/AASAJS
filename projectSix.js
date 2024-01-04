
//  let  provinces = [{
//         id: 1,
//         name: 'Phnom Penh',
//         district: [{
//           id: 2,
//           name: 'ToulKork' ,
//           communes: [{
//             id: 3,
//             name: 'Boeng Kak I'
//           }, {
//             id: 4,
//             name: 'Boeng Kak II'
//           }]
//         }]
//     }]



// const InsertProvice = provinces.map(province=>{
//     provinces[0].pust.district[0].communes.push(addCommunes)
// })

// console.log(JSON.stringify(provinces))
let id=0;
let provinces = []

function addProvinces(provinceName) {
    id +=1
    let province = provinces.find(pro=>pro.name===provinceName)
    if(province){
        console.log("Dupplicate Province")
        return 
    }

    provinces.push({
        id:id,
        name: provinceName,
        districts: []
    });
}


function addDistricts(provinceIndex,districtName){
    
    let foundProvince = provinces.find((province)=>province.id === provinceIndex)
      
    if(!foundProvince){
        console.log("Province not found")
        return
    }

    id+=1;
    foundProvince.districts.push({
        id:id,
        name:districtName,
        commune:[]
    })
}

function addCommunes(districtIndex,communeName){
    id+=1;
    let foundProvince = provinces.find((province)=>province.districts.some((district)=>{
        if(district.id==districtIndex){
            district.commune.push({
                id:id,
                commune:communeName
            })
        }
    }))

}




addProvinces('province1')
addProvinces('province1')
addProvinces('province1')
addDistricts(1,'district1')
addDistricts(2,'district2')
addDistricts(1,'district3')
addCommunes(6,"commune1")
addCommunes(7,"commune2")
addCommunes(802,"commune3")


console.log(JSON.stringify(provinces))
