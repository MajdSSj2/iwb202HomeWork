let TotalPrice = 0 ;
let cartItems = [];


function toggleDetail(checkbox, detailId) {
    var detailSection = document.getElementById(detailId);
    if (checkbox.checked) {
      detailSection.style.display = 'table-row';
    } else {
      detailSection.style.display = 'none';
    }
  }

  // function onProceed(form){
  //   var form = document.getElementById(form)
    
  //   form.style.display =  'block';
  // }


  const checkboxes = document.querySelectorAll('.record-checkbox');
        const form = document.getElementById('form1');
        const proceedButton = document.getElementById('proceedButton');

        proceedButton.addEventListener('click', () => {
            const checkedRecords = Array.from(checkboxes).some((cb) => cb.checked);
            if (checkedRecords) {
              form.style.display = 'block'
            }
            else{
              form.style.display = 'none'
              alert('الرجاء اختيار عقار قبل المتابعة')
            }
        });

          const checkedRecords = Array.from(checkboxes).some((cb) => cb.checked);
          form.style.display = checkedRecords ? 'block' :   'none';
          
        function onUnCheck(checkbox) {
          form.style.display = checkbox.checked ? true :  'none'

        }

       // const NameInput = document`.getElementById(FullName);

    function validateArabicInput(inputElement) {
      const arabicPattern = /[ء-ي]+/;
      const inputValue = inputElement.value;

      if (inputValue.trim() === '') {
        return;
    }
      if (!arabicPattern.test(inputValue)) {
          inputElement.value = '';
          alert("الرجاء ادخال محارف باللغة العربية فقط ");
      }
  }

  function ValidateNationalNumber(NationalIDBox) {
    
    const NationalNumber = NationalIDBox.value;
 
    

if (NationalIDBox.value.trim()=== '') {
  return ;
}

  if (Number(NationalNumber[0]) === 0) {
      if (Number(NationalNumber[1]) >= 1 && Number(NationalNumber[1]) <= 9) {
        return ;

      } else {
          alert('الرجاء ادخال رقم وطني صحيح');
          NationalIDBox.value = '';
          return;
      }
  } else if (Number(NationalNumber[0]) === 1) {
    
      if (Number(NationalNumber[1]) >= 0 && Number(NationalNumber[1]) <= 4) {
        return ;

      } else {
          alert('الرجاء ادخال رقم وطني صحيح');
          NationalIDBox.value = '';
          return ;

      }
  } else {
      alert('الرجاء ادخال رقم وطني صحيح');
      NationalIDBox.value = '';
      return ;

  }
}



const NationalIDBox = document.getElementById('national-id');

NationalIDBox.oninput = function () {
if (this.value.length > 11) {
    this.value = this.value.slice(0,11); 
}
}
  
function ValidatePhoneNumber(PhoneInput) {
  const mobileNum =  PhoneInput.value;

  // if (mobileNum.value.trim()=== ' ') {
  //   return ;
  // }

  if (Number(mobileNum[0]) === 0)
    if(  Number(mobileNum[1]) === 9 ) {
        if ( Number(mobileNum[2]) === 3 || Number(mobileNum[2]) === 8 || Number(mobileNum[2]) === 9  || Number(mobileNum[2]) === 4 || Number(mobileNum[2]) === 5 || Number(mobileNum[2]) === 6) {
          return;
        }
        else{
          alert('الرجاء ادخال رقم موبايل صحيح');
          PhoneInput.value = '';
          return;
        }
   
  }
  else{
    alert('الرجاء ادخال رقم موبايل صحيح');
    PhoneInput.value = '';
    return;
  }
  
    
  alert('الرجاء ادخال رقم موبايل صحيح');
    PhoneInput.value = '';
    return;

}
const mobile = document.getElementById('mobile');

mobile.oninput = function () {
if (this.value.length > 10) {
    this.value = this.value.slice(0,10); 
}
}

function generate() {
  // Clear old input
  document.getElementById("ssubmit").value = "";

  const captcha = document.getElementById("image");
  let uniquechar = "";

  const randomchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  // Generate CAPTCHA with a length of 5 using random characters
  for (let i = 0; i < 5; i++) {
      uniquechar += randomchar.charAt(Math.floor(Math.random() * randomchar.length));
  }

  // Store the generated CAPTCHA
  captcha.textContent = uniquechar;
}

function printmsg() {
  const usr_input = document.getElementById("ssubmit").value;
  const captchaValue = document.getElementById("image").textContent;

  // Check whether the input matches the generated CAPTCHA
  if (usr_input === captchaValue) {
      document.getElementById("key").textContent = "Matched";
      // Allow form submission here

   
      const cartItemsString =  JSON.stringify(cartItems); 

      localStorage.setItem('CartItems', cartItemsString);
     document.getElementById("form1").submit();
   window.open('cartPage.html');

  } else {
      document.getElementById("key").textContent = "Not matched. Please try again.";
      generate(); // Regenerate a new CAPTCHA
  }
}


 // Initialize an empty array for cart items

function addToCart(productName, price) {
  const product = {
    name: productName,
    price: price,
  };

  cartItems.push(product); 
  
  TotalPrice += product.price;
  document.getElementById('TotalNum').textContent = Number(TotalPrice);


}

function ToggleCart(cb, productName, price) {
  if(cb.checked){
    addToCart(productName,price);
  }
  else{
  RemoveFromCart(productName, price);
  }
}

function RemoveFromCart(productName, price) {
 
  

  TotalPrice -= price;

  // for (let pro of cartItems) {
  //   if (pro.name === productName) {
  //     pro.price = 0;
  //     pro.name = '';
  //     pro = null ;
      
  //   }
  // }

  cartItems = cartItems.filter(product => product.name !== productName);

  document.getElementById('TotalNum').textContent = Number(TotalPrice);

}


  





