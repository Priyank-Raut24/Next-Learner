console.log("connect");

let syl = document.getElementById("syllabus");
let dem = document.getElementById("demo");
let pla = document.getElementById("place");
let cnt = document.getElementById("contentToShow")

syl.addEventListener("click", () => {
    cnt.innerHTML = `<div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="headingOne">
                            <button data-mdb-collapse-init class="accordion-button" type="button"
                              data-mdb-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              Accordion Item #1
                            </button>
                          </h2>
                          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                            data-mdb-parent="#accordionExample">
                            <div class="accordion-body">
                              <strong>This is the first item's accordion body.</strong> It is hidden by default,
                              until the collapse plugin adds the appropriate classes that we use to style each
                              element. These classes control the overall appearance, as well as the showing and
                              hiding via CSS transitions. You can modify any of this with custom CSS or
                              overriding our default variables. It's also worth noting that just about any HTML
                              can go within the <strong>.accordion-body</strong>, though the transition does
                              limit overflow.
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="headingTwo">
                            <button data-mdb-collapse-init class="accordion-button collapsed" type="button"
                              data-mdb-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              Accordion Item #2
                            </button>
                          </h2>
                          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-mdb-parent="#accordionExample">
                            <div class="accordion-body">
                              <strong>This is the second item's accordion body.</strong> It is hidden by
                              default, until the collapse plugin adds the appropriate classes that we use to
                              style each element. These classes control the overall appearance, as well as the
                              showing and hiding via CSS transitions. You can modify any of this with custom CSS
                              or overriding our default variables. It's also worth noting that just about any
                              HTML can go within the <strong>.accordion-body</strong>, though the transition
                              does limit overflow.
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="headingThree">
                            <button data-mdb-collapse-init class="accordion-button collapsed" type="button"
                              data-mdb-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              Accordion Item #3
                            </button>
                          </h2>
                          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                            data-mdb-parent="#accordionExample">
                            <div class="accordion-body">
                              <strong>This is the third item's accordion body.</strong> It is hidden by default,
                              until the collapse plugin adds the appropriate classes that we use to style each
                              element. These classes control the overall appearance, as well as the showing and
                              hiding via CSS transitions. You can modify any of this with custom CSS or
                              overriding our default variables. It's also worth noting that just about any HTML
                              can go within the <strong>.accordion-body</strong>, though the transition does
                              limit overflow.
                            </div>
                          </div>
                        </div>
                      </div>`;
})

dem.addEventListener("click", () => {
    cnt.innerHTML = `<h1>Demo</h1>`;
})

pla.addEventListener("click", () => {
    cnt.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54901.51211918878!2d72.69289242092036!3d19.79973641795827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71e57e094b79d%3A0xd2ae65e42807bf83!2sFreesia%20by%20Express%20Inn!5e1!3m2!1sen!2sin!4v1749102741294!5m2!1sen!2sin" class="col-12 w-100 h-100 d-flex justify-content-center" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
})