//    $(document).ready(function() {
//     $('#signupForm select.form-control').multiselect({
//         maxHeight: 200,
//         buttonClass: 'form-control sort-button',
//         buttonWidth: '100%',
//         nonSelectedText: "\00",
//           checkboxName: function (option) {
//         var $select = $(option).closest('select');
//        // console.log($select[0].name)
//         return $select[0].name
//       }
//     });
// });

var username;
var user_id;
var numAsStr = ["one", "two", "three", "four", "five","six","seven"];
$(document).ready(function () {
  $("select.form-control").multiselect({
    maxHeight: 200,
    buttonClass: "form-control sort-button",
    buttonWidth: "100%",
    nonSelectedText: "\00",
    checkboxName: function (option) {
      var $select = $(option).closest("select");
      // console.log($select[0].name)
      return $select[0].name;
    },
  });
});

$(document).ready(function () {
  $.ajaxSetup({
    headers: {
      "X-AUTHORIZATION": "75FjrWPZpdlFfGU7Rjv4cKQABaNZgPbs84ELiFWtD5oBhfpCfmo7pnhL8lffZVJN",
    },
  });
  $.get(
    "https://mip.mealimeter.com/question",
    function (data, status) {
      if (data.success) {

        const res = data.data
       //console.log(res)
        
        let html = ``;

        for (let i = 0; i < res.length / 6; i++){
          
         
          //$("#dataForm .append").append(`<div class="form-row data-section-${numAsStr[i]} form-section row-cols-1"></div>`);
          
          let inner = ``
          for (let j = i*6; j < i*6 + 6; j++){
                 
        
            inner += `<div class="form-group px-3 col">
        <label for="data_question_${res[j].id}">${res[j].question}</label>
       <input type="text" class="form-control" id="data_question_${res[j].id}" name="data_question_${res[j].id}"  placeholder="Type your answer here eg: Tesla">
     </div>`
          
          }    

          html += `<div class="form-row data-section-${numAsStr[i]} row-cols-1">${inner}</div>`

        }

      //  console.log(html)
      $("#dataForm").prepend(html);


        tl .to(".data-section-one", {opacity: 1, display: 'flex', position: 'relative',}, "scene3")
        for (i = 0;i < res.length / 6 - 1; i++){
  
          const progress = `${32.5 + i*22.5}%`
        
          const scene = `scene${i+4}`
          tl.addLabel(scene)
          .to('.progress-bar',{ width: progress, duration: 0.2 },scene)
          .to(".back-arrow",{ opacity: 1, display: 'block',}, scene)
          .to(`.data-section-${numAsStr[i]} label`, { opacity: 0, x:'100%', display: 'none',}, scene)   
          .to(`.data-section-${numAsStr[i]}`, { opacity: 0, display: 'none', position:'absolute'}, scene)
          .to(`.data-section-${numAsStr[i+1]}`, { opacity: 1, display: 'flex', position: 'relative', }, scene)
           //  .from(`.data-section-${numAsStr[i+1]} label`, { opacity: 0, x:'-100', display: 'block',}, scene)  
            .to(`.data-section-${numAsStr[i + 1]} label`, { opacity: 1, x: '0', }, "scene4") 
            .to(window, {
              scrollTo: 0, onComplete: () => {
              //  console.log('scrolled-for')
              }
            }, scene)
         
         
        }
        tl.to('.switch-btn', { opacity: 0, display: 'none' }, `scene${4 + Math.ceil(res.length / 6 - 1)}`)
        tl.to('.final-submit',{opacity:1, display:'block'}, `scene${4 + Math.ceil(res.length / 6 - 1)}`)
        const afterScene = `scene${4 + Math.ceil(res.length / 6 - 1)}`
       // console.log(afterScene)
        tl.addLabel(afterScene)
.to(".pro-header", { paddingTop:!isDesktop&& '35vw'},afterScene)
  .to(".hero-section-one", { left: '0vw', width: isDesktop? '41vw': '100vw',  minWidth: isDesktop&&'49rem', height:  isDesktop? '37.9%': '52vw', top: '26.5%' }, afterScene)
     .to(".hero-block", {backgroundColor: '#F86624', padding: '5.2vh 7.25rem', width: '100%', height: '100%', position: 'relative'},afterScene)
     .to(".hero-content-four", { opacity: 0, display: 'none', position: 'absolute', }, afterScene)
     .to(".hero-content-five", { opacity: 1, display: 'block', position: 'static', margin:'auto' }, afterScene)
  .to(window, {
    scrollTo: 0,
    onStart: () => {
      $('.username').text(username|| "User")
     },
    onComplete: () => {
      //console.log('scrolled')
    }
     },afterScene)
     .to(".logo path:last-of-type", { fill:'#F86624',}, afterScene)
     .addLabel(`scene${4 + Math.ceil(res.length / 6 - 1) + 1}`);
           

       // $(".submit-btn").prop("disabled", false);
        // username = data.data.name;
        // user_id = data.data.id;
        //  console.log(data.data.name)
        // $('.submit-btn').html('Sign me up!') .prop('disabled', false);
        // // $(".hero-title h2").fadeToggle(300);
        // navigateTo(curIndex() + 1);
        // tl.tweenTo(tl.nextLabel());
        return true;
      } else {
      //  $(".submit-btn").prop("disabled", false);
        // $('.error-msg').html('Oops!...Something went wrong! Refresh the page and try again');
        return false;
      }
    }
  );
});

$(function () {
  const $sections = $(".form-section");
  const formSectionsArr = ["signupForm", "infoForm", "detailsForm", "dataForm"];

  function navigateTo(index) {
    // Mark the current section with the class 'current'
    $sections.removeClass("current").eq(index).addClass("current");
    // // Show only the navigation buttons that make sense for the current section:
    // $('.form-navigation .previous').toggle(index > 0);
    // var atTheEnd = index >= $sections.length - 1;
    // $('.form-navigation .next').toggle(!atTheEnd);
    // $('.form-navigation [type=submit]').toggle(atTheEnd);
  }
  function curIndex() {
    // Return the current index by looking at which section has the class 'current'
    return $sections.index($sections.filter(".current"));
  }

  // Previous button is easy, just go back
  $(".form-navigation.previous").click(function () {
   

    if (curIndex() > 2) { 
      tl.tweenTo(tl.previousLabel());
      return
    }
    navigateTo(curIndex() - 1);
    tl.tweenTo(tl.previousLabel());
  });

  // Next button goes forward if current block validates
  $(".form-navigation.next").click(function () {
    const labelsArr = Object.keys(tl.labels)
    $("#mainForm")
      .parsley()
      .whenValidate({
        group: "block-" + curIndex(),
      })
      .done(function () {
        let dataMap = user_id ? { userinfo_id: user_id } : {};

        console.log(curIndex())

        if (curIndex() > 2) {

       //   navigateTo(curIndex() + 1);
       
      
          console.log(tl.currentLabel())

   
            $('.final-submit.forward-arrow').click(function (e) { 
              e.preventDefault();
              const serial = $(
                `#${formSectionsArr[curIndex()]} :input`
              ).serializeArray();
              console.log(serial);

              dataMap = {
                ...dataMap,
                data: [
                  
                ]
              }
  
              serial.forEach((obj) => {
                return (dataMap = {
                  ...dataMap,
                  data: [
                    ...dataMap.data,
                {
                      question_id:  +obj.name.replace('data_question_',''),
                      answer: $(
                        `#${formSectionsArr[curIndex()]} [name="${obj.name}"]`
                      ).val(),
                    }
                  ]
             
                });
              });
              $(".final-submit").prop("disabled", true); 
              //console.log(dataMap)
              $.ajaxSetup({
                headers: {
                  "X-AUTHORIZATION":
                    "75FjrWPZpdlFfGU7Rjv4cKQABaNZgPbs84ELiFWtD5oBhfpCfmo7pnhL8lffZVJN",
                },
              });
              $.post(
                "https://mip.mealimeter.com/user_info/create-step-" +
                  numAsStr[curIndex()],
                { ...dataMap },
                function (data, status) {
                  if (data.success) {
                    $(".final-submit").prop("disabled", false);    
                     tl.tweenTo(tl.nextLabel());
                  
                  } else {
                    $(".final-submit").prop("disabled", false);
                    // $('.error-msg').html('Oops!...Something went wrong! Refresh the page and try again');
                    
                  }
                }
              ).fail(function (jqXHR, textStatus, errorThrown) {
                $(".final-submit").prop("disabled", false);
                console.log(textStatus);
            });
  
            });    
          

         
          tl.tweenTo(tl.nextLabel());
         
          return
        }

       // console.log(dataMap);
        const serial = $(
          `#${formSectionsArr[curIndex()]} :input`
        ).serializeArray();
      //  console.log(serial);

        serial.forEach((obj) => {
          return (dataMap = {
            ...dataMap,
            [obj.name]: $(
              `#${formSectionsArr[curIndex()]} [name="${obj.name}"]`
            ).val(),
          });
        });

      //  console.log(dataMap);

        // dataSubmit(dataMap, numAsStr[curIndex()]);

        $(".submit-btn").prop("disabled", true);
        $.ajaxSetup({
          headers: {
            "X-AUTHORIZATION":
              "75FjrWPZpdlFfGU7Rjv4cKQABaNZgPbs84ELiFWtD5oBhfpCfmo7pnhL8lffZVJN",
          },
        });
        $.post(
          "https://mip.mealimeter.com/user_info/create-step-" +
            numAsStr[curIndex()],
          { ...dataMap },
          function (data, status) {
            if (data.success) {
              $(".submit-btn").prop("disabled", false);
              username = data.data.name;
              user_id = data.data.id;

              if (!!!data.data.step_two) {
                navigateTo(curIndex() + 1);
               // console.log('two')
             return   tl.tweenTo("scene2");
               
              }
              
              else if (!!!data.data.step_three) {
               // console.log('three')
                navigateTo(2);
                return    tl.seek("scene3");
             
              }

              else if (!!!data.data.step_four[0]) {
               // console.log('four')
                navigateTo(3);
                //console.log(curIndex())
                return   tl.seek("scene4");
           
              }

              else

              // navigateTo(curIndex() + 1);
               tl.seek(labelsArr[labelsArr.length - 1]);
            
            } else {
              $(".submit-btn").prop("disabled", false);
              // $('.error-msg').html('Oops!...Something went wrong! Refresh the page and try again');
              
            }
          }
        ).fail(function (jqXHR, textStatus, errorThrown) {
          $(".submit-btn").prop("disabled", false);
          console.log(textStatus);
      });
      });
  });

  // Prepare sections by setting the `data-parsley-group` attribute to 'block-0', 'block-1', etc.
  $sections.each(function (index, section) {
    $(section)
      .find(":input")
      .attr("data-parsley-group", "block-" + index);
  });
  navigateTo(0); // Start at the beginning
});



$('#descriptivePhrase').change(function (e) { 
  e.preventDefault();
  $('#userNiche').text($('#descriptivePhrase').val())
});

