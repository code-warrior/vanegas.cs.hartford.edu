window.onload = () => {
    const
        // WINTER = `05`
        // SPRING = 10,
        // SUMMER = 20,
        FALL = 40;

    // Form the initial string of the link
    let baseURL = `https://uhart-pssba-001.hartford.edu/PROD/bzskfcls.P_GetCrse`;
    let queryStringDelimiter = `?`;

    let chosenProgram_CSDept = `MWD+`; // May also be CS++, CSE+
    let chosenYear_CSDept = 2022;
    let chosenSeason_CSDept = FALL;

    let chosenYear_ArtSchool = 2022;
    let chosenSeason_ArtSchool = FALL;

    let chosenYear_Communication = 2022;
    let chosenSeason_Communication = FALL;

    let chosenYear_UIS = 2022;
    let chosenSeason_UIS = FALL;

    let deptOfCSSearchLink = document.getElementById(`search-link--dept-of-cs`);
    let deptOfArtSchoolSearchLink = document.getElementById(`search-link--hartford-art-school`);
    let deptOfCommunicationSearchLink = document.getElementById(`search-link--dept-of-communication`);
    let UISSearchLink = document.getElementById(`search-link--uis`);

    let program_CSDept = document.getElementById(`program--cs-dept`);
    let season_CSDept = document.getElementById(`season--cs-dept`);
    let year_CSDept = document.getElementById(`year--cs-dept`);

    let season_ArtSchool = document.getElementById(`season--art-school`);
    let year_ArtSchool = document.getElementById(`year--art-school`);

    let season_CommunicationDept = document.getElementById(`season--communication-dept`);
    let year_CommunicationDept = document.getElementById(`year--communication-dept`);

    let season_UIS = document.getElementById(`season--uis`);
    let year_UIS = document.getElementById(`year--uis`);

    /**
     * Listen for option changes associated with the year for courses offered by the
     * Dept of Computing Sciences
     */
    program_CSDept.addEventListener(`change`, function () {
        chosenProgram_CSDept = this.options[this.selectedIndex].value;

        deptOfCSSearchLink.setAttribute(`href`, `${baseURL + queryStringDelimiter}\
sel_subj=dummy&sel_day=dummy&sel_schd=dummy&sel_camp=dummy&sel_sess=dummy&sel_ptrm=dummy&sel_instr=dummy&\
term=${chosenYear_CSDept}${chosenSeason_CSDept}&sel_ptrm=%25&sel_coll=02&\
sel_subj=${this.options[this.selectedIndex].value}&sel_subjc=&sel_crse=&sel_levl=%25&sel_crn=&sel_open=%25&\
sel_title=&begin_hh=0&begin_mi=0&begin_ap=a&end_hh=0&end_mi=0&end_ap=a&sel_dl=N&submit_btn=Get+Classes`);
    });

    /**
     * Listen for option changes associated with the season (winter, spring, summer,
     * and fall) for courses offered by the Dept of Computing Sciences
     */
    season_CSDept.addEventListener(`change`, function () {
        chosenSeason_CSDept = this.options[this.selectedIndex].value;

        deptOfCSSearchLink.setAttribute(`href`, `${baseURL + queryStringDelimiter}\
sel_subj=dummy&sel_day=dummy&sel_schd=dummy&sel_camp=dummy&sel_sess=dummy&sel_ptrm=dummy&sel_instr=dummy&\
term=${chosenYear_CSDept}${this.options[this.selectedIndex].value}&sel_ptrm=%25&sel_coll=02&\
sel_subj=${chosenProgram_CSDept}&sel_subjc=&sel_crse=&sel_levl=%25&sel_crn=&sel_open=%25&sel_title=&\
begin_hh=0&begin_mi=0&begin_ap=a&end_hh=0&end_mi=0&end_ap=a&sel_dl=N&submit_btn=Get+Classes`);
    } );

    /**
     * Listen for option changes associated with the year for courses offered by the
     * Dept of Computing Sciences.
     */
    year_CSDept.addEventListener(`change`, function () {
        chosenYear_CSDept = this.options[this.selectedIndex].value;

        deptOfCSSearchLink.setAttribute(`href`, `${baseURL + queryStringDelimiter}\
sel_subj=dummy&sel_day=dummy&sel_schd=dummy&sel_camp=dummy&sel_sess=dummy&sel_ptrm=dummy&sel_instr=dummy&\
term=${this.options[this.selectedIndex].value}${chosenSeason_CSDept}&sel_ptrm=%25&sel_coll=02&\
sel_subj=${chosenProgram_CSDept}&sel_subjc=&sel_crse=&sel_levl=%25&sel_crn=&sel_open=%25&sel_title=&\
begin_hh=0&begin_mi=0&begin_ap=a&end_hh=0&end_mi=0&end_ap=a&sel_dl=N&submit_btn=Get+Classes`);
    });

    /**
     * Listen for option changes associated with the season (winter, spring, summer,
     * and fall) for design courses offered by the art school.
     */
    season_ArtSchool.addEventListener(`change`, function () {
        chosenSeason_ArtSchool = this.options[this.selectedIndex].value;

        deptOfArtSchoolSearchLink.setAttribute(`href`, `${baseURL + queryStringDelimiter}\
sel_subj=dummy&sel_day=dummy&sel_schd=dummy&sel_camp=dummy&sel_sess=dummy&sel_ptrm=dummy&sel_instr=dummy&\
term=${chosenYear_ArtSchool}${this.options[this.selectedIndex].value}&sel_ptrm=%25&sel_coll=01&sel_subjc=DES&\
sel_crse=&sel_levl=%25&sel_crn=&sel_open=%25&sel_title=&begin_hh=0&begin_mi=0&begin_ap=a&end_hh=0&end_mi=0&end_ap=a&\
sel_dl=N&submit_btn=Get+Classes`);
    });

    /**
     * Listen for option changes associated with the year for design courses offered
     * by the art school.
     */
    year_ArtSchool.addEventListener(`change`, function () {
        chosenYear_ArtSchool = this.options[this.selectedIndex].value;

        deptOfArtSchoolSearchLink.setAttribute(`href`, `${baseURL + queryStringDelimiter}\
sel_subj=dummy&sel_day=dummy&sel_schd=dummy&sel_camp=dummy&sel_sess=dummy&sel_ptrm=dummy&sel_instr=dummy&\
term=${this.options[this.selectedIndex].value}${chosenSeason_ArtSchool}&sel_ptrm=%25&sel_coll=01&sel_subjc=DES&\
sel_crse=&sel_levl=%25&sel_crn=&sel_open=%25&sel_title=&begin_hh=0&begin_mi=0&begin_ap=a&end_hh=0&end_mi=0&end_ap=a&\
sel_dl=N&submit_btn=Get+Classes`);
    });

    /**
     * TODO
     */
    season_CommunicationDept.addEventListener(`change`, function () {
        chosenSeason_Communication = this.options[this.selectedIndex].value;

        deptOfCommunicationSearchLink.setAttribute(`href`, `${baseURL + queryStringDelimiter}\
sel_subj=dummy&sel_day=dummy&sel_schd=dummy&sel_camp=dummy&sel_sess=dummy&sel_ptrm=dummy&sel_instr=dummy&term=${chosenYear_Communication}${this.options[this.selectedIndex].value}&sel_ptrm=%25&sel_coll=02&sel_subjc=CMM&sel_crse=110&sel_levl=%25&sel_crn=&sel_open=%25&sel_title=&begin_hh=0&begin_mi=0&begin_ap=a&end_hh=0&end_mi=0&end_ap=a&sel_dl=N&submit_btn=Get+Classes`);
    });

    /**
     * TODO
     */
    year_CommunicationDept.addEventListener(`change`, function () {
        chosenYear_Communication = this.options[this.selectedIndex].value;

        deptOfCommunicationSearchLink.setAttribute(`href`, `${baseURL + queryStringDelimiter}\
sel_subj=dummy&sel_day=dummy&sel_schd=dummy&sel_camp=dummy&sel_sess=dummy&sel_ptrm=dummy&sel_instr=dummy&term=${this.options[this.selectedIndex].value}${chosenSeason_Communication}&sel_ptrm=%25&sel_coll=02&sel_subjc=CMM&sel_crse=110&sel_levl=%25&sel_crn=&sel_open=%25&sel_title=&begin_hh=0&begin_mi=0&begin_ap=a&end_hh=0&end_mi=0&end_ap=a&sel_dl=N&submit_btn=Get+Classes`);
    });

    /**
     * TODO
     */
    season_UIS.addEventListener(`change`, function () {
        chosenSeason_UIS = this.options[this.selectedIndex].value;

        UISSearchLink.setAttribute(`href`, `${baseURL + queryStringDelimiter}\
sel_subj=dummy&sel_day=dummy&sel_schd=dummy&sel_camp=dummy&sel_sess=dummy&sel_ptrm=dummy&sel_instr=dummy&term=${chosenYear_UIS}${this.options[this.selectedIndex].value}&sel_ptrm=%25&sel_coll=15&sel_subjc=&sel_crse=&sel_levl=%25&sel_crn=&sel_open=%25&sel_title=&begin_hh=0&begin_mi=0&begin_ap=a&end_hh=0&end_mi=0&end_ap=a&sel_dl=N&submit_btn=Get+Classes`);
    });

    /**
     * TODO
     */
    year_UIS.addEventListener(`change`, function () {
        chosenYear_UIS = this.options[this.selectedIndex].value;

        UISSearchLink.setAttribute(`href`, `${baseURL + queryStringDelimiter}\
sel_subj=dummy&sel_day=dummy&sel_schd=dummy&sel_camp=dummy&sel_sess=dummy&sel_ptrm=dummy&sel_instr=dummy&term=${this.options[this.selectedIndex].value}${chosenSeason_UIS}&sel_ptrm=%25&sel_coll=15&sel_subjc=&sel_crse=&sel_levl=%25&sel_crn=&sel_open=%25&sel_title=&begin_hh=0&begin_mi=0&begin_ap=a&end_hh=0&end_mi=0&end_ap=a&sel_dl=N&submit_btn=Get+Classes`);
    });
};
