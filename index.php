<!DOCTYPE html>
<html>
    <head>
        <title>Curriculum</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
        <link href="./css/index.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
        <script src="./lib/jquery.min.js"></script>
    </head>
    <body>
        <header>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container">
                    <a class="navbar-brand" href="#">Santiago</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarScroll">
                        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                            <li class="nav-item">
                                <a id="home-link" class="nav-link active" aria-current="page" href="#"></a>
                            </li>
                            <li class="nav-item">
                                <a id="resume-link" class="nav-link" href="#"></a>
                            </li>
                        </ul>
                        <ul class="navbar-nav my-2 my-lg-0 navbar-nav-scroll">
                            <li class="nav-item dropdown">
                                <a id="current-lang" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img class="icons" src="./img/icons/estados-unidos.png" alt="usa flag"/>    
                                    EN
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a class="dropdown-item" href="#" onclick="changeLang('en');">
                                            <img class="icons" src="./img/icons/estados-unidos.png" alt="usa flag"/>
                                            EN
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#" onclick="changeLang('es');">
                                            <img class="icons" src="./img/icons/colombia.png" alt="usa flag"/>
                                            ES
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

        <section id="home" class="container-fluid section">
            <div class="row">
                <div class="col-sm-6">
                    <img id="profile-img" src="./img/santiago.jpg" alt="Santigo Quevedo"/>
                </div>
                <div id="presentation" class="col-sm-6">
                    <h6 id="presentation-title" class="display-6"></h6>
                    <p id="presentation-description"></p>
                    <small id="presentation-subtitle"></small>
                    <div>
                        <a href="https://www.linkedin.com/in/santiago-quevedo-escobar-710112114">
                            <img class="icons" src="./img/icons/linkedin.png" alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/NasQuevedo">
                            <img class="icons" src="./img/icons/github.png" alt="GitHub" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="container-fluid section">
            <div class="row">
                <div class="col-sm-7">
                    <h6 id="profile" class="display-6"></h6>
                    <p id="profile-description"></p>
                </div>
                <div class="col-sm-5">
                    <ul class="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Experience</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Education</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Skills</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">.
                            <div class="list-group">
                                <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                                    <div class="d-flex w-100 justify-content-between">
                                        <h5 class="mb-1">Publicis Groupe</h5>
                                    </div>
                                    <p class="mb-1">Software Engineer</p>
                                    <small>And some small print.</small>
                                </a>
                                <a href="#" class="list-group-item list-group-item-action">
                                    <div class="d-flex w-100 justify-content-between">
                                        <h5 class="mb-1">Open Atlas S.A</h5>
                                    </div>
                                    <p class="mb-1">Desarrollador Web</p>
                                    <small class="text-body-secondary">And some muted small print.</small>
                                </a>
                                <a href="#" class="list-group-item list-group-item-action">
                                    <div class="d-flex w-100 justify-content-between">
                                        <h5 class="mb-1">BRM S.A</h5>
                                    </div>
                                    <p class="mb-1">Desarrollador PHP Junior</p>
                                    <small class="text-body-secondary">And some muted small print.</small>
                                </a>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                            <ul>
                                <li>Politecnico Grancolombiano</li>
                                <li>SENA</li>
                                <li>IEDI La Cendelaria</li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
                            <ul>
                                <li>PHP</li>
                                <li>Javascript</li>
                                <li>CSS</li>
                                <li>HTML</li>
                                <li>SQL</li>
                                <li>NoSQL</li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0">...</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="container-fluid section">
            <div class="row">
                <div class="col-sm-12">
                    <h6 id="portfolio" class="display-6"></h6>
                    <div>
                        <img class="img-projects" src="./img/nidobabyhealth.png" />
                        <div class="text-project">
                            <p>Nido Baby Health</p>
                            <a href="">View</a>
                            <a href="">Detail</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="contauner-fluid section">
            <div class="row">
                <div class="col-sm-4">
                    <h6 id="contact-title" class="display-6"></h6>
                </div>
                <div class="col-sm-8">
                    <form>
                        <div class="form-floating mb-3">
                            <input  type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                            <label id="from" for="floatingInput"></label>
                        </div>
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingPassword" placeholder="Password">
                            <label id="subject" for="floatingPassword"></label>
                        </div>
                        <div class="form-floating">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label id="message" for="floatingTextarea"></label>
                        </div>
                    </form>
                </div>
            </div>
        </secion>

        <footer></footer>
        <script src="./js/index.js"></script>
    </body>
</html>