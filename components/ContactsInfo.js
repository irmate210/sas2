const ContactsInfo = () => {
  return (
    <div className="section contacts section_" id="section-contacts">
      <div className="content">
        <div className="title">
          <div className="title_inner">Contacts</div>
        </div>
        <div className="service-items">
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-android-phone-portrait" />
            </div>
            <div className="name">Phone</div>
            <p>+ (373) 69 488 262</p>
          </div>



            


          <div className="service-item">
            <div className="icon">
              <span className="ion ion-email" />
            </div>
            <div className="name">Personal Email</div>
            <p>tincumax@mail.ru</p>
          </div>

          <div className="service-item">
            <div className="icon">
              <span className="ion ion-email" />
            </div>
            <div className="name">Work Email</div>
            <p>max@tincumax.com</p>
          </div>


        </div>



        
      </div>
    </div>
  );
};
export default ContactsInfo;
