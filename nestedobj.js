let student_detail={
    fullname:"fidha",
    s_age:21,
    s_address:{
        s_place:"valapattanam",
        s_pincode:"670009",
        district:"kannur"
    }
}
console.log("details=",student_detail)

//deconstructing
 const{fullname,s_age,s_address:{s_place,s_pincode,district}}=student_detail
 console.log("place=",s_place) 
 console.log("pincode=",s_pincode) 

