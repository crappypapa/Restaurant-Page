export const contact = () => {
  const contactSection = document.createElement('div');
  contactSection.className = 'hide';
  contactSection.id = 'contact';

  const sectionTitle = document.createElement('h3');
  sectionTitle.className = 'px-5';
  sectionTitle.innerHTML = 'Get In Touch';

  const form = document.createElement('form');
  form.actinon = '#';
  form.innerHTML = `
    <div>
      <div class="container mb-5">
          <div class="row justify justify-content-center">
              <div class="col-11 col-md-8 col-lg-6 col-xl-5">
                  <form class="">
                      <div>
                          <div class="form-group row mb-3">
                              <div class="col-md-12 mb-0">
                              <input id="e-mail" type="text" placeholder="Enter your email here " name="email" class="form-control input-box rm-border">
                              </div>
                          </div>
                          <div class="form-group row">
                              <div class="col-md-12 mb-2">
                              <textarea id="message" type="text" placeholder="Enter your message here" name="message" class="form-control input-box rm-border"></textarea>
                              </div>
                          </div>
                          <div class="form-group row justify-content-center mb-0">
                              <div class="col-md-12 px-3">  
                              <input type="submit" name="submit">
                              </div>
                          </div>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </div>
    `;

  contactSection.appendChild(sectionTitle);
  contactSection.appendChild(form);

  return contactSection;
};

export default contact;