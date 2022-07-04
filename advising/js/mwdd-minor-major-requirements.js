window.onload = () => {
    let baseURL_Catalog = `https://catalog.hartford.edu/preview_program.php`;

    let degreeRequirements_MWDD_URL_Variables = [
        `catoid=21&poid=4519`, // Major: 2018–2019
        `catoid=21&poid=4720`, // Minor: 2018–2019
        `catoid=23&poid=4916`, // Major: 2019–2020
        `catoid=23&poid=5117`, // Minor: 2019–2020
        `catoid=25&poid=5578`, // Major: 2020–2021
        `catoid=25&poid=5779`, // Minor: 2020–2021
        `catoid=26&poid=5863`, // Major; 2021–2022
        `catoid=26&poid=6064`, // Minor: 2021–2022
        `catoid=MAJOR&poid=YEAR`, // Major; 2022–2023
        `catoid=MINOR&poid=YEAR`  // Minor: 2022–2023
    ];

    // Reference the drop down menu for “major” or “minor”
    let degreeRequirements_MWDD_MajorOrMinor = document.getElementById(`degree-reqs--mwdd--major-or-minor`);
    let degreeRequirements_MWDD_AcademicYear = document.getElementById(`degree-reqs--mwdd--academic-year`);
    let degreeRequirements_MWDD_Link = document.getElementById(`degree-reqs--mwdd--link`);

    let chosenMajorMinor =
        degreeRequirements_MWDD_MajorOrMinor.options[degreeRequirements_MWDD_MajorOrMinor.selectedIndex].value;
    let chosenYear =
        degreeRequirements_MWDD_AcademicYear.options[degreeRequirements_MWDD_AcademicYear.selectedIndex].value;

    /**
     *
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

    // Prepare default URL
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
};
