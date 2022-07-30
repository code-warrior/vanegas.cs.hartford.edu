window.onload = () => {
    let courseSearch__BaseURL = `https://uhart-pssba-001.hartford.edu/PROD/bzskfcls.P_GetCrse`,
        URLTokens = [
        // Partial token common to all course search URLs
        `sel_subj=dummy&sel_day=dummy&sel_schd=dummy&sel_camp=dummy&sel_sess=dummy&sel_ptrm=dummy&sel_instr=dummy&term=`,
        // Only used by the CS Dept course search URL
        `&sel_ptrm=%25&sel_coll=02&sel_subj=`,
        // Only used by the CS Dept course search URL
        `&sel_subjc=&sel_crse=&sel_levl=%25&sel_crn=&sel_open=%25&sel_title=&begin_hh=0&begin_mi=0&begin_ap=a&end_hh=0&end_mi=0&end_ap=a&sel_dl=N&submit_btn=Get+Classes`,
        // Only used by the Design Dept course search URL
        `&sel_ptrm=%25&sel_coll=01&sel_subjc=DES&sel_crse=&sel_levl=%25&sel_crn=&sel_open=%25&sel_title=&begin_hh=0&begin_mi=0&begin_ap=a&end_hh=0&end_mi=0&end_ap=a&sel_dl=N&submit_btn=Get+Classes`,
        // Only used by the CMM 110 course search URL
        `&sel_ptrm=%25&sel_coll=02&sel_subjc=CMM&sel_crse=110&sel_levl=%25&sel_crn=&sel_open=%25&sel_title=&begin_hh=0&begin_mi=0&begin_ap=a&end_hh=0&end_mi=0&end_ap=a&sel_dl=N&submit_btn=Get+Classes`,
        // Only used by the UIS course search URL
        `&sel_ptrm=%25&sel_coll=15&sel_subjc=&sel_crse=&sel_levl=%25&sel_crn=&sel_open=%25&sel_title=&begin_hh=0&begin_mi=0&begin_ap=a&end_hh=0&end_mi=0&end_ap=a&sel_dl=N&submit_btn=Get+Classes`
    ];

    let courseSearch__CSDept__DropDown__Program = document.getElementById(`course-search--cs-dept--drop-down--program`),
        courseSearch__CSDept__DropDown__Season = document.getElementById(`course-search--cs-dept--drop-down--season`),
        courseSearch__CSDept__DropDown__Year = document.getElementById(`course-search--cs-dept--drop-down--year`),
        courseSearch__CSDept__Link = document.getElementById(`course-search--cs-dept--drop-down--link`);

    let courseSearch__DesignDept__DropDown__Season = document.getElementById(`course-search--design-dept--drop-down--season`),
        courseSearch__DesignDept__DropDown__Year = document.getElementById(`course-search--design-dept--drop-down--year`),
        courseSearch__DesignDept__Link = document.getElementById(`course-search--design-dept--link`);

    let courseSearch__CommDept__DropDown__Season = document.getElementById(`course-search--comm-dept--drop-down--season`),
        courseSearch__CommDept__DropDown__Year = document.getElementById(`course-search--comm-dept--drop-down--year`),
        courseSearch__CommDept__Link = document.getElementById(`course-search--comm-dept--link`);

    let courseSearch__UISDept__DropDown__Season = document.getElementById(`course-search--uis-dept--drop-down--season`),
        courseSearch__UISDept__DropDown__Year = document.getElementById(`course-search--uis-dept--drop-down--year`),
        courseSearch__UISDept__Link = document.getElementById(`course-search--uis-dept--link`);

    /**
     *
     * @param program
     * @param year
     * @param season
     */
    let setCSDeptCourseSearchURL = (program, year, season) => {
        courseSearch__CSDept__Link.setAttribute(`href`, `${courseSearch__BaseURL}?${URLTokens[0]}${year}${season}${URLTokens[1]}${program}${URLTokens[2]}`);
    };

    /**
     *
     * @param year
     * @param season
     */
    let setDesignDeptCourseSearchURL = (year, season) => {
        courseSearch__DesignDept__Link.setAttribute(`href`, `${courseSearch__BaseURL}?${URLTokens[0]}${year}${season}${URLTokens[3]}`);
    };

    /**
     *
     * @param year
     * @param season
     */
    let setCommDeptCourseSearchURL = (year, season) => {
        courseSearch__CommDept__Link.setAttribute(`href`, `${courseSearch__BaseURL}?${URLTokens[0]}${year}${season}${URLTokens[4]}`);
    };

    /**
     *
     * @param year
     * @param season
     */
    let setUISDeptCourseSearchURL = (year, season) => {
        courseSearch__UISDept__Link.setAttribute(`href`, `${courseSearch__BaseURL}?${URLTokens[0]}${year}${season}${URLTokens[5]}`);
    };

    /**
     *
     * @param year
     * @param majorOrMinor
     */
    let setDegreeRequirementsURL = (year, majorOrMinor) => {
        switch (year) {
            case `2018`:
                if (`major` === majorOrMinor) {
                    degreeRequirements_MWDD_Link.setAttribute(
                        `href`,
                        `${baseURL_Catalog}?${degreeRequirements_MWDD_URL_Variables[0]}`);
                } else {
                    if (`minor` === majorOrMinor) {
                        degreeRequirements_MWDD_Link.setAttribute(
                            `href`,
                            `${baseURL_Catalog}?${degreeRequirements_MWDD_URL_Variables[1]}`);
                    } else {
                        alert(`Invalid major or minor associated with ${year}`);
                    }
                }

                break;

            case `2019`:
                if (`major` === majorOrMinor) {
                    degreeRequirements_MWDD_Link.setAttribute(
                        `href`,
                        `${baseURL_Catalog}?${degreeRequirements_MWDD_URL_Variables[2]}`);
                } else {
                    if (`minor` === majorOrMinor) {
                        degreeRequirements_MWDD_Link.setAttribute(
                            `href`,
                            `${baseURL_Catalog}?${degreeRequirements_MWDD_URL_Variables[3]}`);
                    } else {
                        alert(`Invalid major or minor associated with ${year}`);
                    }
                }

                break;

            case `2020`:
                if (`major` === majorOrMinor) {
                    degreeRequirements_MWDD_Link.setAttribute(
                        `href`,
                        `${baseURL_Catalog}?${degreeRequirements_MWDD_URL_Variables[4]}`);
                } else {
                    if (`minor` === majorOrMinor) {
                        degreeRequirements_MWDD_Link.setAttribute(
                            `href`,
                            `${baseURL_Catalog}?${degreeRequirements_MWDD_URL_Variables[5]}`);
                    } else {
                        alert(`Invalid major or minor associated with ${year}`);
                    }
                }

                break;

            case `2021`:
                if (`major` === majorOrMinor) {
                    degreeRequirements_MWDD_Link.setAttribute(
                        `href`,
                        `${baseURL_Catalog}?${degreeRequirements_MWDD_URL_Variables[6]}`);
                } else {
                    if (`minor` === majorOrMinor) {
                        degreeRequirements_MWDD_Link.setAttribute(
                            `href`,
                            `${baseURL_Catalog}?${degreeRequirements_MWDD_URL_Variables[7]}`);
                    } else {
                        alert(`Invalid major or minor associated with ${year}`);
                    }
                }

                break;

            case `2022`:
                if (`major` === majorOrMinor) {
                    degreeRequirements_MWDD_Link.setAttribute(
                        `href`,
                        `${baseURL_Catalog}?${degreeRequirements_MWDD_URL_Variables[8]}`);
                } else {
                    if (`minor` === majorOrMinor) {
                        degreeRequirements_MWDD_Link.setAttribute(
                            `href`,
                            `${baseURL_Catalog}?${degreeRequirements_MWDD_URL_Variables[9]}`);
                    } else {
                        alert(`Invalid major or minor associated with ${year}`);
                    }
                }

                break;
        }
    };

    courseSearch__CSDept__DropDown__Program.addEventListener(`change`, (event) => {
        setCSDeptCourseSearchURL(
            event.target.value,
            courseSearch__CSDept__DropDown__Year.options[courseSearch__CSDept__DropDown__Year.selectedIndex].getAttribute(`value`),
            courseSearch__CSDept__DropDown__Season.options[courseSearch__CSDept__DropDown__Season.selectedIndex].getAttribute(`value`)
        );
    });

    courseSearch__CSDept__DropDown__Year.addEventListener(`change`, (event) => {
        setCSDeptCourseSearchURL(
            courseSearch__CSDept__DropDown__Program.options[courseSearch__CSDept__DropDown__Program.selectedIndex].getAttribute(`value`),
            event.target.value,
            courseSearch__CSDept__DropDown__Season.options[courseSearch__CSDept__DropDown__Season.selectedIndex].getAttribute(`value`)
        );
    });

    courseSearch__CSDept__DropDown__Season.addEventListener(`change`, (event) => {
        setCSDeptCourseSearchURL(
            courseSearch__CSDept__DropDown__Program.options[courseSearch__CSDept__DropDown__Program.selectedIndex].getAttribute(`value`),
            courseSearch__CSDept__DropDown__Year.options[courseSearch__CSDept__DropDown__Year.selectedIndex].getAttribute(`value`),
            event.target.value
        );
    });

    courseSearch__DesignDept__DropDown__Season.addEventListener(`change`, (event) => {
        setDesignDeptCourseSearchURL(
            courseSearch__DesignDept__DropDown__Year.options[courseSearch__DesignDept__DropDown__Year.selectedIndex].getAttribute(`value`),
            event.target.value
        );
    });

    courseSearch__DesignDept__DropDown__Year.addEventListener(`change`, (event) => {
        setDesignDeptCourseSearchURL(
            event.target.value,
            courseSearch__DesignDept__DropDown__Season.options[courseSearch__DesignDept__DropDown__Season.selectedIndex].getAttribute(`value`)
        );
    });

    courseSearch__CommDept__DropDown__Year.addEventListener(`change`, (event) => {
        setCommDeptCourseSearchURL(
            event.target.value,
            courseSearch__CommDept__DropDown__Season.options[courseSearch__CommDept__DropDown__Season.selectedIndex].getAttribute(`value`)
        );
    });

    courseSearch__CommDept__DropDown__Season.addEventListener(`change`, (event) => {
        setCommDeptCourseSearchURL(
            courseSearch__CommDept__DropDown__Year.options[courseSearch__CommDept__DropDown__Year.selectedIndex].getAttribute(`value`),
            event.target.value
        );
    });

    courseSearch__UISDept__DropDown__Season.addEventListener(`change`, (event) => {
        setUISDeptCourseSearchURL(courseSearch__UISDept__DropDown__Year.options[courseSearch__UISDept__DropDown__Year.selectedIndex].getAttribute(`value`), event.target.value);
    });

    courseSearch__UISDept__DropDown__Year.addEventListener(`change`, (event) => {
        setUISDeptCourseSearchURL(event.target.value, courseSearch__UISDept__DropDown__Season.options[courseSearch__UISDept__DropDown__Season.selectedIndex].getAttribute(`value`));
    });

    let baseURL_Catalog = `https://catalog.hartford.edu/preview_program.php`;
    let electives_MWDD_AcademicYear = document.getElementById(`electives--mwdd--academic-year`);
    let electives_MWDD_AcademicYear_Link = document.getElementById(`electives--mwdd--academic-year--link`);
    let degreeRequirements_MWDD_MajorOrMinor = document.getElementById(`degree-reqs--mwdd--major-or-minor`);
    let degreeRequirements_MWDD_AcademicYear = document.getElementById(`degree-reqs--mwdd--academic-year`);
    let degreeRequirements_MWDD_Link = document.getElementById(`degree-reqs--mwdd--link`);
    let chosenMajorMinor =
        degreeRequirements_MWDD_MajorOrMinor.options[degreeRequirements_MWDD_MajorOrMinor.selectedIndex].value;
    let chosenYear =
        degreeRequirements_MWDD_AcademicYear.options[degreeRequirements_MWDD_AcademicYear.selectedIndex].value;

    let degreeRequirements_MWDD_URL_Variables = [
        `catoid=21&poid=4519`,    // Major: 2018–2019
        `catoid=21&poid=4720`,    // Minor: 2018–2019
        `catoid=23&poid=4916`,    // Major: 2019–2020
        `catoid=23&poid=5117`,    // Minor: 2019–2020
        `catoid=25&poid=5578`,    // Major: 2020–2021
        `catoid=25&poid=5779`,    // Minor: 2020–2021
        `catoid=26&poid=5863`,    // Major; 2021–2022
        `catoid=26&poid=6064`,    // Minor: 2021–2022
        `catoid=MAJOR&poid=YEAR`, // Major; 2022–2023
        `catoid=MINOR&poid=YEAR`  // Minor: 2022–2023
    ];

    setCSDeptCourseSearchURL(
        courseSearch__CSDept__DropDown__Program.options[courseSearch__CSDept__DropDown__Program.selectedIndex].getAttribute(`value`),
        courseSearch__CSDept__DropDown__Year.options[courseSearch__CSDept__DropDown__Year.selectedIndex].getAttribute(`value`),
        courseSearch__CSDept__DropDown__Season.options[courseSearch__CSDept__DropDown__Season.selectedIndex].getAttribute(`value`)
    );

    setDesignDeptCourseSearchURL(
        courseSearch__DesignDept__DropDown__Year.options[courseSearch__DesignDept__DropDown__Year.selectedIndex].getAttribute(`value`),
        courseSearch__DesignDept__DropDown__Season.options[courseSearch__DesignDept__DropDown__Season.selectedIndex].getAttribute(`value`)
    );

    setCommDeptCourseSearchURL(
        courseSearch__CommDept__DropDown__Year.options[courseSearch__CommDept__DropDown__Year.selectedIndex].getAttribute(`value`),
        courseSearch__CommDept__DropDown__Season.options[courseSearch__CommDept__DropDown__Season.selectedIndex].getAttribute(`value`)
    );

    setUISDeptCourseSearchURL(
        courseSearch__UISDept__DropDown__Year.options[courseSearch__UISDept__DropDown__Year.selectedIndex].getAttribute(`value`),
        courseSearch__UISDept__DropDown__Season.options[courseSearch__UISDept__DropDown__Season.selectedIndex].getAttribute(`value`)
    );

    setDegreeRequirementsURL(chosenYear, chosenMajorMinor);

    // Listen for changes on the major chosen
    degreeRequirements_MWDD_MajorOrMinor.addEventListener(`change`, function () {
        chosenMajorMinor = this.options[this.selectedIndex].value;

        setDegreeRequirementsURL(chosenYear, chosenMajorMinor);
    });

    // Listen for changes on the year chosen
    degreeRequirements_MWDD_AcademicYear.addEventListener(`change`, function () {
        chosenYear = this.options[this.selectedIndex].value;

        setDegreeRequirementsURL(chosenYear, chosenMajorMinor);
    });

    electives_MWDD_AcademicYear_Link.setAttribute(
        `href`,
        `${baseURL_Catalog}?${electives_MWDD_AcademicYear.options[electives_MWDD_AcademicYear.selectedIndex].value}`);

    electives_MWDD_AcademicYear.addEventListener(`change`, function () {
        electives_MWDD_AcademicYear_Link.setAttribute(
            `href`,
            `${baseURL_Catalog}?${this.options[this.selectedIndex].value}`);
    });
};
