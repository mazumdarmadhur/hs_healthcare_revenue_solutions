import React from 'react'
import { TabTitle } from '../util/GeneralFunctions'
import ServiceList from './ServiceList'

const EftEra = () => {
  TabTitle('EFT/ERA | HSHCRS')

  return (
    <>
      <div className="container pb-5 pt-4">
        <div className="row ">
          <div className="col-md-8">
            <div class="welcome-area inner-text">
              <p>EFT and ERA have numerous advantages in medical billing, mostly related to your cash flow, time and medical record accuracy. Electronic Remittance Advice (ERA) is an electronic replacement for paper explanations of benefits and Electronic Funds Transfer (EFT) allows the patients to submit their payments directly to the receivers practice’s bank account.</p>
              <h2>Benefits of ERA and EFT</h2>
              <ul>
                <li><strong className='in-heading'>Saving time:</strong>
                  <p className='in__heading__p'>Explanations Of benefits (EOBs) are often processed manually. Given the high volume of claims that shifts through the medical industry, such manual processes quickly become time-consuming and tedious. Since ERAs are electronic, they are seamless to create and send. The result is invaluable time back for front-office staff to interact directly with patients and complete other projects.</p>
                </li>
                <li><strong className='in-heading'>Fewer errors:</strong>
                  <p className='in__heading__p'>When manually working with a high volume of EOBs, it’s easy to list the incorrect dollar amounts that cause trouble for the organization, patients and to the payers. Switching to an ERA medical billing model can vastly reduce the frequency of these types of errors. Then the result comes are more accurate and comprehensive set of patient billing communication in the medical billing.</p>
                </li>
                <li><strong className='in-heading'>Streamlined denials management:</strong>
                  <p className='in__heading__p'>A small number of denied claims is inescapable for the partnership. The good news with ERAs is that they can group denials and approvals. This grouping matters because, although the approved claims leave a balance for the patient, that balance is still lesser than a full-on denial. Concentrating on denied-claim ERAs means faster revenue.</p>
                </li>
                <li><strong className='in-heading'>More cash flow:</strong>
                  <p className='in__heading__p'>By pairing with ERA, EFT eliminates the cash flow obstacles common with EOBs and paper payments. This combination of EFT and ERA helps patients to know what they owe sooner and can pay it immediately. For, an organization that helps to get cash now instead of later.</p>
                </li>
                <li><strong className='in-heading'>Digital accounting records:</strong>
                  <p className='in__heading__p'>EFT creates an easy to follow electronic payment route, whereas paper payments or EOBs require extra effort on the claimer end to track and link together. The result is a client account history that emits exactly when the patient has paid for which services are provided to them.</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <ServiceList />
          </div>
        </div>
      </div>
    </>
  )
}

export default EftEra