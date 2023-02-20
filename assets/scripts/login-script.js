/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

/** @module Login-Script*/
/**
* Membuat tampilan formulir dengan mendefenisikan variabel loginFormElement
* @constant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');

/**
* Membuat tampilan input email dengan mendefenisikan variabel inputEmailElement
* @constant {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');

/**
* Membuat tampilan input password dengan mendefenisikan variabel inputPasswordElement
* @constant {HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');

/**
* expectedEmail sebagai email validasi
* @constant {string}
*/
const expectedEmail = 'admin@dicoding.com';

/**
* expectedPassword sebagai password validasi
* @constant {string}
*/
const expectedPassword = 'superpassword';

loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = inputEmailElement.value;
  const password = inputPasswordElement.value;
  if (email == expectedEmail && password == expectedPassword) {
    goToHome();
  } else {
    showPopUp();
  }
});
