window.onload = () => {
    let baseURL_Catalog = `https://catalog.hartford.edu/preview_program.php`;
    let electives_MWDD_AcademicYear = document.getElementById(`electives--mwdd--academic-year`);
    let electives_MWDD_AcademicYear_Link = document.getElementById(`electives--mwdd--academic-year--link`);

    electives_MWDD_AcademicYear_Link.setAttribute(
        `href`,
        `${baseURL_Catalog}?${electives_MWDD_AcademicYear.options[electives_MWDD_AcademicYear.selectedIndex].value}`);

    electives_MWDD_AcademicYear.addEventListener(`change`, function () {
        electives_MWDD_AcademicYear_Link.setAttribute(
            `href`,
            `${baseURL_Catalog}?${this.options[this.selectedIndex].value}`);
    });
};
