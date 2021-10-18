
import React from 'react'

const Contacts = ({ contacts }) => {
  return ( 
    <div  >
      <center><h1>勞工保險基金年度經營概況</h1></center>
      <center><h5><a href='https://apiservice.mol.gov.tw/OdService/rest/datastore/A17000000J-030178-KKA'>https://apiservice.mol.gov.tw/OdService/rest/datastore/A17000000J-030178-KKA</a></h5></center>
      {contacts.filter(contactfilter => contactfilter.年度>2017).map((contact) => (
        <div class="card">
          <div class="card-body alignCenter ">
            <h5 class="card-title">年度:{contact.年度}</h5>
            <h6 class="card-subtitle mb-2 text-muted">基金運用餘額:{contact.基金運用餘額}</h6>
            <h6 class="card-subtitle mb-2 text-muted">基金收益數:{contact.基金收益數}</h6>
            <h6 class="card-subtitle mb-2 text-muted">收益率:{contact.收益率}</h6>

            {/*                    
                <h5 class="card-title">{contact.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
                <p class="card-text">{contact.company.catchPhrase}</p>   */}
          </div>
        </div>
      ))}
    </div>
  )
};
export { Contacts }