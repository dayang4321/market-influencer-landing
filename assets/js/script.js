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
var numAsStr = ["one", "two", "three", "four", "five", "six"];
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

        for (let i = 0; i < res.length/6 ; i++){
          $("#dataForm").append(`<div class="form-row data-section-${numAsStr[i]} form-section row-cols-1"></div>`);
          

          for (let j = i*6; j < i*6 + 6; j++){
                 
            $(`#dataForm .data-section-${numAsStr[i]}`).append(
       `     <label for="data_question_${res[j].id}">${res[j].question}</label>
       <input type="text" class="form-control" id="data_question_${res[j].id}" name="data_question_${res[j].id}"  placeholder="Type your answer here eg: Tesla">
     </div>`
            )
          }


             
     

        }

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
    navigateTo(curIndex() - 1);
    tl.tweenTo(tl.previousLabel());
  });

  // Next button goes forward if current block validates
  $(".form-navigation.next").click(function () {
    $("#mainForm")
      .parsley()
      .whenValidate({
        group: "block-" + curIndex(),
      })
      .done(function () {
        let dataMap = user_id ? { userinfo_id: user_id } : {};
        console.log(dataMap);
        const serial = $(
          `#${formSectionsArr[curIndex()]} :input`
        ).serializeArray();
        console.log(serial);

        serial.forEach((obj) => {
          return (dataMap = {
            ...dataMap,
            [obj.name]: $(
              `#${formSectionsArr[curIndex()]} [name="${obj.name}"]`
            ).val(),
          });
        });

        console.log(dataMap);

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
                console.log('two')
             return   tl.tweenTo("scene2");
               
              }
              
              else if (!!!data.data.step_three) {
                console.log('three')
                navigateTo(2);
                return    tl.tweenTo("scene3");
             
              }

              else if (!!!data.data.step_four[0]) {
                console.log('four')
                navigateTo(3);
                return     tl.tweenTo("scene4");
           
              }

              else

              navigateTo(curIndex() + 1);
              tl.tweenTo(tl.nextLabel());
              return true;
            } else {
              $(".submit-btn").prop("disabled", false);
              // $('.error-msg').html('Oops!...Something went wrong! Refresh the page and try again');
              return false;
            }
          }
        );
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
