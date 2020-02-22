# General Comments
## A. Security
1.0. Page 11 of the EMV PDF https://www.emvco.com/wp-content/uploads/documents/EMVCo-Consumer-Presented-QR-Specification-v1-1.pdf says: "While out of scope of this specification, in the event that any cardholder verification is required, it is envisaged that it would be performed through CDCVM. Thus, unlike typical EMV transactions, the requirement for CVM is never communicated, or delegated to the POI. While specific markets may have POI CVM requirements in addition to any CDCVM that may have been performed, these POI CVM requirements are out of scope for EMVCo."

The type of Consumer Device Cardholder Verification Method (CDCVM) used determines where liability lies if a transaction turns out to be fraudulent [[1]], but there is no mention of this important risk in your writeup, with respect to the question "How does the security model work?".

## B. Transaction Processing
Figure 2.1 is a diagram on page 11 of the PDF showing the "QR Code Payment Architecture" illustrating "the flow of QR Code data into the POI system and subsequently into the payment ecosystem." It is important we revisit it since the client wants the PoC to "work under real POS." 

What type of payloads does a POI expect? The POI expects two (2) kinds of payloads as can be seen on page 22:
"After the POI has processed the QR Code data payload, it has two sets of data: the *POI Data* and the *Transparent Data*.
The POI uses the POI data for transaction processing and both sets of data to build the online messages. 

The POI does not use the Transparent Data for transaction processing.
Transaction processing includes the following:
- Check whether the payment product is supported
- Process Track 2 Equivalent Data (tag '57')
- Display of POI messages
- Print receipt
..."

Essentially, track 2 data (or equivalent) contains the minimun info needed for a merchant to charge a card [[2]] the other bit being the amount which is set by the merchant. This minimum info called "track 2 (equivalent) data" had its normative references mentioned on pages 7-8 of the PDF:
* [ISO 7813] - ISO/IEC 7813. Identification Cards—Financial Transaction Cards [[3]]
* [ISO 8583] - ISO/IEC 8583. Financial transaction card originated messages — Interchange message specifications [[4]]

These standards [[3]][[4]] collectively specify the data elements necessary for requests to succeed on the payment network. In a physical transaction where the card is present (CP), a traditional POI (magnetic stripe) should be capable of reading off the following card info (encoded in Tracks 1/2):
- Primary account number (PAN) 
- Expiration date 
- Name
- Service code

Presenting the CVC/CVV code to the merchant will further allow a transaction to be classified as CP. Your PoC encodes only a subset of these fields in the generated QR code so there is the risk that when your QR code is forwarded as a payload from an actual POI device to the payment network, the omitted fields may cause the network to (incorrectly) flag the transaction as a CNP [[0]] transaction (meaning higher fees) or not honor it (high suspicion of fraud).


* [0]: CNP: https://en.wikipedia.org/wiki/Card_not_present_transaction
* [1]: CDCVM: https://support.apple.com/en-us/HT202527
* [2]: Track 2 (equivalent) data: https://www.quora.com/Whats-the-bare-minimum-information-that-Stripe-requires-to-charge-a-credit-card
* [3]: ISO 7813: https://en.wikipedia.org/wiki/ISO/IEC_7813
  - [3a]: Track 1 data: https://en.wikipedia.org/wiki/ISO/IEC_7813#Track_1
  - [3b]: Track 2 data: https://en.wikipedia.org/wiki/ISO/IEC_7813#Track_2
* [4]: ISO 8583: https://en.wikipedia.org/wiki/ISO_8583#ISO-defined_data_elements_(ver_1987)
* [5]: TSP: https://blog.rsisecurity.com/what-is-a-token-service-provider/

