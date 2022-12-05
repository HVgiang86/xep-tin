let download_path = "./5_ky2- 2022-2023.xlsx";
let download_name = "5_ky2- 2022-2023.xlsx";
let title = "Kì 2 Năm học 2022 - 2023";

// ---

let download_link = document.getElementById("download-link");
download_link.setAttribute("href", download_path);
download_link.setAttribute("download", download_name);
let school_year = document.getElementById('school-year');
school_year.innerHTML = title;