export interface Faq { q: string; a: string }
export interface Step { title: string; text: string }
export interface Scenario { title: string; intro: string; items: string[]; outro: string }
export interface City {
  slug: string;
  name: string;
  state: string;
  stateName: string;
  county: string;
  formName: string;
  title: string;
  description: string;
  h1Bottom: string;
  hero: string;
  localNoteTitle: string;
  localNote: string;
  whyHeading: string;
  why: string[];
  steps: Step[];
  faqs: Faq[];
  nearby: string[];
  summaryFees?: boolean;
  summarySteps?: boolean;
  scenario?: Scenario;
  blurb: string;
}

export const brand = "Houston Wholesale Double Close";
export const domain = "houston.wholesaledoubleclose.click";
export const trustBar = ["Published funding fees", "Purchase and resale review", "Greater Houston service areas"];
export const cities: City[] = [
  {
    "slug": "houston",
    "name": "Houston",
    "state": "TX",
    "stateName": "Texas",
    "county": "Harris County",
    "formName": "Houston-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Houston, TX | Houston Wholesale Double Close",
    "description": "Transactional funding review for wholesale double closings in Houston, Texas. View our fee schedule and submit your purchase and resale details.",
    "h1Bottom": "in Houston, Texas",
    "hero": "The Heights and Museum District give Houston distinct neighborhood landmarks. Identify the neighborhood and exact parcel rather than relying on a citywide label. A property near the Heights may need a different resale plan from one elsewhere in the city. Our transactional funding review connects your purchase contract, resale contract and closing arrangements for a double closing in Houston. Submit the property address, both prices and your closing office so we can review the file; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Houston double closing",
    "localNote": "Identify the neighborhood and exact parcel rather than relying on a citywide label. A property near the Heights may need a different resale plan from one elsewhere in the city. Your closing office can confirm title requirements, settlement costs and the order of the two transactions. Do not treat a funding review as legal advice or as a substitute for the closing office's instructions.",
    "whyHeading": "A funding review built around your Houston file",
    "why": [
      "The Heights and Museum District give Houston distinct neighborhood landmarks. Identify the neighborhood and exact parcel rather than relying on a citywide label. A property near the Heights may need a different resale plan from one elsewhere in the city.",
      "Our review starts with the actual purchase and resale agreements for your Houston property. Tell us which end buyer and closing office are involved so any unresolved conditions can be identified.",
      "Our published fee schedule gives you a starting point for estimating transaction costs. Review the written funding terms and the closing office's separate charges before deciding whether the deal works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Identify the neighborhood and exact parcel rather than relying on a citywide label. A property near the Heights may need a different resale plan from one elsewhere in the city. Include the purchase and resale prices and your target closing date."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "How should I describe a Houston property?",
        "a": "The Heights and Museum District give Houston distinct neighborhood landmarks. Identify the neighborhood and exact parcel rather than relying on a citywide label. A property near the Heights may need a different resale plan from one elsewhere in the city."
      },
      {
        "q": "What should my Houston submission include?",
        "a": "Send the exact Houston address, purchase price, resale price and closing office details. Include available documents and identify any known occupancy, title or contract questions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "pasadena"
    ],
    "blurb": "The Heights and Museum District give Houston distinct neighborhood landmarks."
  },
  {
    "slug": "pasadena",
    "name": "Pasadena",
    "state": "TX",
    "stateName": "Texas",
    "county": "Harris County",
    "formName": "Houston-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Pasadena, TX | Houston Wholesale Double Close",
    "description": "Transactional funding review for wholesale double closings in Pasadena, Texas. View our fee schedule and submit your purchase and resale details.",
    "h1Bottom": "in Pasadena, Texas",
    "hero": "Pasadena preserves its local story through Heritage Park and Museum. A local landmark can help describe the area, but the contract and property records must identify the actual parcel. Send the occupancy status and any seller documentation with the deal. Our transactional funding review connects your purchase contract, resale contract and closing arrangements for a double closing in Pasadena. Submit the property address, both prices and your closing office so we can review the file; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Pasadena double closing",
    "localNote": "A local landmark can help describe the area, but the contract and property records must identify the actual parcel. Send the occupancy status and any seller documentation with the deal. Your closing office can confirm title requirements, settlement costs and the order of the two transactions. Do not treat a funding review as legal advice or as a substitute for the closing office's instructions.",
    "whyHeading": "A funding review built around your Pasadena file",
    "why": [
      "Pasadena preserves its local story through Heritage Park and Museum. A local landmark can help describe the area, but the contract and property records must identify the actual parcel. Send the occupancy status and any seller documentation with the deal.",
      "Our review starts with the actual purchase and resale agreements for your Pasadena property. Tell us which end buyer and closing office are involved so any unresolved conditions can be identified.",
      "Our published fee schedule gives you a starting point for estimating transaction costs. Review the written funding terms and the closing office's separate charges before deciding whether the deal works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "A local landmark can help describe the area, but the contract and property records must identify the actual parcel. Send the occupancy status and any seller documentation with the deal. Include the purchase and resale prices and your target closing date."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "How should I describe a Pasadena property?",
        "a": "Pasadena preserves its local story through Heritage Park and Museum. A local landmark can help describe the area, but the contract and property records must identify the actual parcel. Send the occupancy status and any seller documentation with the deal."
      },
      {
        "q": "What should my Pasadena submission include?",
        "a": "Send the exact Pasadena address, purchase price, resale price and closing office details. Include available documents and identify any known occupancy, title or contract questions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "houston",
      "baytown"
    ],
    "blurb": "Pasadena preserves its local story through Heritage Park and Museum."
  },
  {
    "slug": "baytown",
    "name": "Baytown",
    "state": "TX",
    "stateName": "Texas",
    "county": "Harris County",
    "formName": "Houston-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Baytown, TX | Houston Wholesale Double Close",
    "description": "Transactional funding review for wholesale double closings in Baytown, Texas. View our fee schedule and submit your purchase and resale details.",
    "h1Bottom": "in Baytown, Texas",
    "hero": "Baytown sits east of Houston near the waterways of the upper Texas Gulf Coast. For a property in this coastal setting, share any available flood, insurance or survey information. The closing team can confirm which property-specific records it needs. Our transactional funding review connects your purchase contract, resale contract and closing arrangements for a double closing in Baytown. Submit the property address, both prices and your closing office so we can review the file; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Baytown double closing",
    "localNote": "For a property in this coastal setting, share any available flood, insurance or survey information. The closing team can confirm which property-specific records it needs. Your closing office can confirm title requirements, settlement costs and the order of the two transactions. Do not treat a funding review as legal advice or as a substitute for the closing office's instructions.",
    "whyHeading": "A funding review built around your Baytown file",
    "why": [
      "Baytown sits east of Houston near the waterways of the upper Texas Gulf Coast. For a property in this coastal setting, share any available flood, insurance or survey information. The closing team can confirm which property-specific records it needs.",
      "Our review starts with the actual purchase and resale agreements for your Baytown property. Tell us which end buyer and closing office are involved so any unresolved conditions can be identified.",
      "Our published fee schedule gives you a starting point for estimating transaction costs. Review the written funding terms and the closing office's separate charges before deciding whether the deal works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "For a property in this coastal setting, share any available flood, insurance or survey information. The closing team can confirm which property-specific records it needs. Include the purchase and resale prices and your target closing date."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "How should I describe a Baytown property?",
        "a": "Baytown sits east of Houston near the waterways of the upper Texas Gulf Coast. For a property in this coastal setting, share any available flood, insurance or survey information. The closing team can confirm which property-specific records it needs."
      },
      {
        "q": "What should my Baytown submission include?",
        "a": "Send the exact Baytown address, purchase price, resale price and closing office details. Include available documents and identify any known occupancy, title or contract questions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "pasadena",
      "deer-park"
    ],
    "blurb": "Baytown sits east of Houston near the waterways of the upper Texas Gulf Coast."
  },
  {
    "slug": "deer-park",
    "name": "Deer Park",
    "state": "TX",
    "stateName": "Texas",
    "county": "Harris County",
    "formName": "Houston-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Deer Park, TX | Houston Wholesale Double Close",
    "description": "Transactional funding review for wholesale double closings in Deer Park, Texas. View our fee schedule and submit your purchase and resale details.",
    "h1Bottom": "in Deer Park, Texas",
    "hero": "Deer Park connects its community history with the nearby San Jacinto area. A historical association is not a title review. Include the legal description and existing survey so the closing team can separate the property facts from the area description. Our transactional funding review connects your purchase contract, resale contract and closing arrangements for a double closing in Deer Park. Submit the property address, both prices and your closing office so we can review the file; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Deer Park double closing",
    "localNote": "A historical association is not a title review. Include the legal description and existing survey so the closing team can separate the property facts from the area description. Your closing office can confirm title requirements, settlement costs and the order of the two transactions. Do not treat a funding review as legal advice or as a substitute for the closing office's instructions.",
    "whyHeading": "A funding review built around your Deer Park file",
    "why": [
      "Deer Park connects its community history with the nearby San Jacinto area. A historical association is not a title review. Include the legal description and existing survey so the closing team can separate the property facts from the area description.",
      "Our review starts with the actual purchase and resale agreements for your Deer Park property. Tell us which end buyer and closing office are involved so any unresolved conditions can be identified.",
      "Our published fee schedule gives you a starting point for estimating transaction costs. Review the written funding terms and the closing office's separate charges before deciding whether the deal works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "A historical association is not a title review. Include the legal description and existing survey so the closing team can separate the property facts from the area description. Include the purchase and resale prices and your target closing date."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "How should I describe a Deer Park property?",
        "a": "Deer Park connects its community history with the nearby San Jacinto area. A historical association is not a title review. Include the legal description and existing survey so the closing team can separate the property facts from the area description."
      },
      {
        "q": "What should my Deer Park submission include?",
        "a": "Send the exact Deer Park address, purchase price, resale price and closing office details. Include available documents and identify any known occupancy, title or contract questions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "baytown",
      "la-porte"
    ],
    "blurb": "Deer Park connects its community history with the nearby San Jacinto area."
  },
  {
    "slug": "la-porte",
    "name": "La Porte",
    "state": "TX",
    "stateName": "Texas",
    "county": "Harris County",
    "formName": "Houston-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in La Porte, TX | Houston Wholesale Double Close",
    "description": "Transactional funding review for wholesale double closings in La Porte, Texas. View our fee schedule and submit your purchase and resale details.",
    "h1Bottom": "in La Porte, Texas",
    "hero": "La Porte has a long connection to Galveston Bay and its waterfront. Bay-area properties deserve a file built around the parcel, not assumptions about the whole coast. Share any known insurance, survey or flood information with the contracts. Our transactional funding review connects your purchase contract, resale contract and closing arrangements for a double closing in La Porte. Submit the property address, both prices and your closing office so we can review the file; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a La Porte double closing",
    "localNote": "Bay-area properties deserve a file built around the parcel, not assumptions about the whole coast. Share any known insurance, survey or flood information with the contracts. Your closing office can confirm title requirements, settlement costs and the order of the two transactions. Do not treat a funding review as legal advice or as a substitute for the closing office's instructions.",
    "whyHeading": "A funding review built around your La Porte file",
    "why": [
      "La Porte has a long connection to Galveston Bay and its waterfront. Bay-area properties deserve a file built around the parcel, not assumptions about the whole coast. Share any known insurance, survey or flood information with the contracts.",
      "Our review starts with the actual purchase and resale agreements for your La Porte property. Tell us which end buyer and closing office are involved so any unresolved conditions can be identified.",
      "Our published fee schedule gives you a starting point for estimating transaction costs. Review the written funding terms and the closing office's separate charges before deciding whether the deal works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Bay-area properties deserve a file built around the parcel, not assumptions about the whole coast. Share any known insurance, survey or flood information with the contracts. Include the purchase and resale prices and your target closing date."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "How should I describe a La Porte property?",
        "a": "La Porte has a long connection to Galveston Bay and its waterfront. Bay-area properties deserve a file built around the parcel, not assumptions about the whole coast. Share any known insurance, survey or flood information with the contracts."
      },
      {
        "q": "What should my La Porte submission include?",
        "a": "Send the exact La Porte address, purchase price, resale price and closing office details. Include available documents and identify any known occupancy, title or contract questions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "deer-park",
      "sugar-land"
    ],
    "blurb": "La Porte has a long connection to Galveston Bay and its waterfront."
  },
  {
    "slug": "sugar-land",
    "name": "Sugar Land",
    "state": "TX",
    "stateName": "Texas",
    "county": "Fort Bend County",
    "formName": "Houston-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Sugar Land, TX | Houston Wholesale Double Close",
    "description": "Transactional funding review for wholesale double closings in Sugar Land, Texas. View our fee schedule and submit your purchase and resale details.",
    "h1Bottom": "in Sugar Land, Texas",
    "hero": "Sugar Land Town Square is a recognizable center for shopping and community events. The Town Square area is a useful location reference, but your end buyer needs the exact property and resale terms. Include any association documents already available. Our transactional funding review connects your purchase contract, resale contract and closing arrangements for a double closing in Sugar Land. Submit the property address, both prices and your closing office so we can review the file; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Sugar Land double closing",
    "localNote": "The Town Square area is a useful location reference, but your end buyer needs the exact property and resale terms. Include any association documents already available. Your closing office can confirm title requirements, settlement costs and the order of the two transactions. Do not treat a funding review as legal advice or as a substitute for the closing office's instructions.",
    "whyHeading": "A funding review built around your Sugar Land file",
    "why": [
      "Sugar Land Town Square is a recognizable center for shopping and community events. The Town Square area is a useful location reference, but your end buyer needs the exact property and resale terms. Include any association documents already available.",
      "Our review starts with the actual purchase and resale agreements for your Sugar Land property. Tell us which end buyer and closing office are involved so any unresolved conditions can be identified.",
      "Our published fee schedule gives you a starting point for estimating transaction costs. Review the written funding terms and the closing office's separate charges before deciding whether the deal works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "The Town Square area is a useful location reference, but your end buyer needs the exact property and resale terms. Include any association documents already available. Include the purchase and resale prices and your target closing date."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "How should I describe a Sugar Land property?",
        "a": "Sugar Land Town Square is a recognizable center for shopping and community events. The Town Square area is a useful location reference, but your end buyer needs the exact property and resale terms. Include any association documents already available."
      },
      {
        "q": "What should my Sugar Land submission include?",
        "a": "Send the exact Sugar Land address, purchase price, resale price and closing office details. Include available documents and identify any known occupancy, title or contract questions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "la-porte",
      "missouri-city"
    ],
    "blurb": "Sugar Land Town Square is a recognizable center for shopping and community events."
  },
  {
    "slug": "missouri-city",
    "name": "Missouri City",
    "state": "TX",
    "stateName": "Texas",
    "county": "Fort Bend County",
    "formName": "Houston-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Missouri City, TX | Houston Wholesale Double Close",
    "description": "Transactional funding review for wholesale double closings in Missouri City, Texas. View our fee schedule and submit your purchase and resale details.",
    "h1Bottom": "in Missouri City, Texas",
    "hero": "Missouri City developed from a railroad-era community into a southwest Houston suburb. Use the property address to distinguish the actual subdivision and municipality. Provide any association information and explain whether the seller or a tenant occupies the home. Our transactional funding review connects your purchase contract, resale contract and closing arrangements for a double closing in Missouri City. Submit the property address, both prices and your closing office so we can review the file; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Missouri City double closing",
    "localNote": "Use the property address to distinguish the actual subdivision and municipality. Provide any association information and explain whether the seller or a tenant occupies the home. Your closing office can confirm title requirements, settlement costs and the order of the two transactions. Do not treat a funding review as legal advice or as a substitute for the closing office's instructions.",
    "whyHeading": "A funding review built around your Missouri City file",
    "why": [
      "Missouri City developed from a railroad-era community into a southwest Houston suburb. Use the property address to distinguish the actual subdivision and municipality. Provide any association information and explain whether the seller or a tenant occupies the home.",
      "Our review starts with the actual purchase and resale agreements for your Missouri City property. Tell us which end buyer and closing office are involved so any unresolved conditions can be identified.",
      "Our published fee schedule gives you a starting point for estimating transaction costs. Review the written funding terms and the closing office's separate charges before deciding whether the deal works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Use the property address to distinguish the actual subdivision and municipality. Provide any association information and explain whether the seller or a tenant occupies the home. Include the purchase and resale prices and your target closing date."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "How should I describe a Missouri City property?",
        "a": "Missouri City developed from a railroad-era community into a southwest Houston suburb. Use the property address to distinguish the actual subdivision and municipality. Provide any association information and explain whether the seller or a tenant occupies the home."
      },
      {
        "q": "What should my Missouri City submission include?",
        "a": "Send the exact Missouri City address, purchase price, resale price and closing office details. Include available documents and identify any known occupancy, title or contract questions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "sugar-land",
      "rosenberg"
    ],
    "blurb": "Missouri City developed from a railroad-era community into a southwest Houston suburb."
  },
  {
    "slug": "rosenberg",
    "name": "Rosenberg",
    "state": "TX",
    "stateName": "Texas",
    "county": "Fort Bend County",
    "formName": "Houston-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Rosenberg, TX | Houston Wholesale Double Close",
    "description": "Transactional funding review for wholesale double closings in Rosenberg, Texas. View our fee schedule and submit your purchase and resale details.",
    "h1Bottom": "in Rosenberg, Texas",
    "hero": "Rosenberg grew around the railroad, a history still reflected in its downtown identity. For a deal near the older center, send the survey and ownership documents you already hold. The closing team can confirm whether the title file requires additional records. Our transactional funding review connects your purchase contract, resale contract and closing arrangements for a double closing in Rosenberg. Submit the property address, both prices and your closing office so we can review the file; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Rosenberg double closing",
    "localNote": "For a deal near the older center, send the survey and ownership documents you already hold. The closing team can confirm whether the title file requires additional records. Your closing office can confirm title requirements, settlement costs and the order of the two transactions. Do not treat a funding review as legal advice or as a substitute for the closing office's instructions.",
    "whyHeading": "A funding review built around your Rosenberg file",
    "why": [
      "Rosenberg grew around the railroad, a history still reflected in its downtown identity. For a deal near the older center, send the survey and ownership documents you already hold. The closing team can confirm whether the title file requires additional records.",
      "Our review starts with the actual purchase and resale agreements for your Rosenberg property. Tell us which end buyer and closing office are involved so any unresolved conditions can be identified.",
      "Our published fee schedule gives you a starting point for estimating transaction costs. Review the written funding terms and the closing office's separate charges before deciding whether the deal works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "For a deal near the older center, send the survey and ownership documents you already hold. The closing team can confirm whether the title file requires additional records. Include the purchase and resale prices and your target closing date."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "How should I describe a Rosenberg property?",
        "a": "Rosenberg grew around the railroad, a history still reflected in its downtown identity. For a deal near the older center, send the survey and ownership documents you already hold. The closing team can confirm whether the title file requires additional records."
      },
      {
        "q": "What should my Rosenberg submission include?",
        "a": "Send the exact Rosenberg address, purchase price, resale price and closing office details. Include available documents and identify any known occupancy, title or contract questions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "missouri-city",
      "fulshear"
    ],
    "blurb": "Rosenberg grew around the railroad, a history still reflected in its downtown identity."
  },
  {
    "slug": "fulshear",
    "name": "Fulshear",
    "state": "TX",
    "stateName": "Texas",
    "county": "Fort Bend County",
    "formName": "Houston-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Fulshear, TX | Houston Wholesale Double Close",
    "description": "Transactional funding review for wholesale double closings in Fulshear, Texas. View our fee schedule and submit your purchase and resale details.",
    "h1Bottom": "in Fulshear, Texas",
    "hero": "Fulshear traces its roots to a farming and railroad community west of Houston. Describe the actual subdivision or parcel instead of assuming every Fulshear deal has the same setting. Share any available association and utility-district paperwork for review. Our transactional funding review connects your purchase contract, resale contract and closing arrangements for a double closing in Fulshear. Submit the property address, both prices and your closing office so we can review the file; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Fulshear double closing",
    "localNote": "Describe the actual subdivision or parcel instead of assuming every Fulshear deal has the same setting. Share any available association and utility-district paperwork for review. Your closing office can confirm title requirements, settlement costs and the order of the two transactions. Do not treat a funding review as legal advice or as a substitute for the closing office's instructions.",
    "whyHeading": "A funding review built around your Fulshear file",
    "why": [
      "Fulshear traces its roots to a farming and railroad community west of Houston. Describe the actual subdivision or parcel instead of assuming every Fulshear deal has the same setting. Share any available association and utility-district paperwork for review.",
      "Our review starts with the actual purchase and resale agreements for your Fulshear property. Tell us which end buyer and closing office are involved so any unresolved conditions can be identified.",
      "Our published fee schedule gives you a starting point for estimating transaction costs. Review the written funding terms and the closing office's separate charges before deciding whether the deal works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Describe the actual subdivision or parcel instead of assuming every Fulshear deal has the same setting. Share any available association and utility-district paperwork for review. Include the purchase and resale prices and your target closing date."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "How should I describe a Fulshear property?",
        "a": "Fulshear traces its roots to a farming and railroad community west of Houston. Describe the actual subdivision or parcel instead of assuming every Fulshear deal has the same setting. Share any available association and utility-district paperwork for review."
      },
      {
        "q": "What should my Fulshear submission include?",
        "a": "Send the exact Fulshear address, purchase price, resale price and closing office details. Include available documents and identify any known occupancy, title or contract questions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "rosenberg",
      "pearland"
    ],
    "blurb": "Fulshear traces its roots to a farming and railroad community west of Houston."
  },
  {
    "slug": "pearland",
    "name": "Pearland",
    "state": "TX",
    "stateName": "Texas",
    "county": "Brazoria County",
    "formName": "Houston-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Pearland, TX | Houston Wholesale Double Close",
    "description": "Transactional funding review for wholesale double closings in Pearland, Texas. View our fee schedule and submit your purchase and resale details.",
    "h1Bottom": "in Pearland, Texas",
    "hero": "Pearland has its own visitor destinations and community identity south of Houston. Keep the municipality, subdivision and parcel details together in your submission. An end buyer should be identified separately from your expected resale price. Our transactional funding review connects your purchase contract, resale contract and closing arrangements for a double closing in Pearland. Submit the property address, both prices and your closing office so we can review the file; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Pearland double closing",
    "localNote": "Keep the municipality, subdivision and parcel details together in your submission. An end buyer should be identified separately from your expected resale price. Your closing office can confirm title requirements, settlement costs and the order of the two transactions. Do not treat a funding review as legal advice or as a substitute for the closing office's instructions.",
    "whyHeading": "A funding review built around your Pearland file",
    "why": [
      "Pearland has its own visitor destinations and community identity south of Houston. Keep the municipality, subdivision and parcel details together in your submission. An end buyer should be identified separately from your expected resale price.",
      "Our review starts with the actual purchase and resale agreements for your Pearland property. Tell us which end buyer and closing office are involved so any unresolved conditions can be identified.",
      "Our published fee schedule gives you a starting point for estimating transaction costs. Review the written funding terms and the closing office's separate charges before deciding whether the deal works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Keep the municipality, subdivision and parcel details together in your submission. An end buyer should be identified separately from your expected resale price. Include the purchase and resale prices and your target closing date."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "How should I describe a Pearland property?",
        "a": "Pearland has its own visitor destinations and community identity south of Houston. Keep the municipality, subdivision and parcel details together in your submission. An end buyer should be identified separately from your expected resale price."
      },
      {
        "q": "What should my Pearland submission include?",
        "a": "Send the exact Pearland address, purchase price, resale price and closing office details. Include available documents and identify any known occupancy, title or contract questions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "fulshear",
      "league-city"
    ],
    "blurb": "Pearland has its own visitor destinations and community identity south of Houston."
  },
  {
    "slug": "league-city",
    "name": "League City",
    "state": "TX",
    "stateName": "Texas",
    "county": "Galveston County",
    "formName": "Houston-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in League City, TX | Houston Wholesale Double Close",
    "description": "Transactional funding review for wholesale double closings in League City, Texas. View our fee schedule and submit your purchase and resale details.",
    "h1Bottom": "in League City, Texas",
    "hero": "League City has a historic district with preserved local character. For a property in or near the historic district, identify any known restrictions rather than assuming them. The closing team can confirm which documents apply to the actual property. Our transactional funding review connects your purchase contract, resale contract and closing arrangements for a double closing in League City. Submit the property address, both prices and your closing office so we can review the file; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a League City double closing",
    "localNote": "For a property in or near the historic district, identify any known restrictions rather than assuming them. The closing team can confirm which documents apply to the actual property. Your closing office can confirm title requirements, settlement costs and the order of the two transactions. Do not treat a funding review as legal advice or as a substitute for the closing office's instructions.",
    "whyHeading": "A funding review built around your League City file",
    "why": [
      "League City has a historic district with preserved local character. For a property in or near the historic district, identify any known restrictions rather than assuming them. The closing team can confirm which documents apply to the actual property.",
      "Our review starts with the actual purchase and resale agreements for your League City property. Tell us which end buyer and closing office are involved so any unresolved conditions can be identified.",
      "Our published fee schedule gives you a starting point for estimating transaction costs. Review the written funding terms and the closing office's separate charges before deciding whether the deal works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "For a property in or near the historic district, identify any known restrictions rather than assuming them. The closing team can confirm which documents apply to the actual property. Include the purchase and resale prices and your target closing date."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "How should I describe a League City property?",
        "a": "League City has a historic district with preserved local character. For a property in or near the historic district, identify any known restrictions rather than assuming them. The closing team can confirm which documents apply to the actual property."
      },
      {
        "q": "What should my League City submission include?",
        "a": "Send the exact League City address, purchase price, resale price and closing office details. Include available documents and identify any known occupancy, title or contract questions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "pearland",
      "friendswood"
    ],
    "blurb": "League City has a historic district with preserved local character."
  },
  {
    "slug": "friendswood",
    "name": "Friendswood",
    "state": "TX",
    "stateName": "Texas",
    "county": "Galveston County",
    "formName": "Houston-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Friendswood, TX | Houston Wholesale Double Close",
    "description": "Transactional funding review for wholesale double closings in Friendswood, Texas. View our fee schedule and submit your purchase and resale details.",
    "h1Bottom": "in Friendswood, Texas",
    "hero": "Friendswood began as a Quaker settlement, a history the city continues to preserve. An older community history does not establish the age or condition of a particular home. Send the exact property details and any known ownership or occupancy issues. Our transactional funding review connects your purchase contract, resale contract and closing arrangements for a double closing in Friendswood. Submit the property address, both prices and your closing office so we can review the file; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Friendswood double closing",
    "localNote": "An older community history does not establish the age or condition of a particular home. Send the exact property details and any known ownership or occupancy issues. Your closing office can confirm title requirements, settlement costs and the order of the two transactions. Do not treat a funding review as legal advice or as a substitute for the closing office's instructions.",
    "whyHeading": "A funding review built around your Friendswood file",
    "why": [
      "Friendswood began as a Quaker settlement, a history the city continues to preserve. An older community history does not establish the age or condition of a particular home. Send the exact property details and any known ownership or occupancy issues.",
      "Our review starts with the actual purchase and resale agreements for your Friendswood property. Tell us which end buyer and closing office are involved so any unresolved conditions can be identified.",
      "Our published fee schedule gives you a starting point for estimating transaction costs. Review the written funding terms and the closing office's separate charges before deciding whether the deal works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "An older community history does not establish the age or condition of a particular home. Send the exact property details and any known ownership or occupancy issues. Include the purchase and resale prices and your target closing date."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "How should I describe a Friendswood property?",
        "a": "Friendswood began as a Quaker settlement, a history the city continues to preserve. An older community history does not establish the age or condition of a particular home. Send the exact property details and any known ownership or occupancy issues."
      },
      {
        "q": "What should my Friendswood submission include?",
        "a": "Send the exact Friendswood address, purchase price, resale price and closing office details. Include available documents and identify any known occupancy, title or contract questions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "league-city",
      "texas-city"
    ],
    "blurb": "Friendswood began as a Quaker settlement, a history the city continues to preserve."
  },
  {
    "slug": "texas-city",
    "name": "Texas City",
    "state": "TX",
    "stateName": "Texas",
    "county": "Galveston County",
    "formName": "Houston-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Texas City, TX | Houston Wholesale Double Close",
    "description": "Transactional funding review for wholesale double closings in Texas City, Texas. View our fee schedule and submit your purchase and resale details.",
    "h1Bottom": "in Texas City, Texas",
    "hero": "Texas City developed as a port community on the mainland side of Galveston Bay. For a bay-area deal, include any available survey, flood and insurance records. The purchase and resale files still need their own contracts and closing instructions. Our transactional funding review connects your purchase contract, resale contract and closing arrangements for a double closing in Texas City. Submit the property address, both prices and your closing office so we can review the file; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Texas City double closing",
    "localNote": "For a bay-area deal, include any available survey, flood and insurance records. The purchase and resale files still need their own contracts and closing instructions. Your closing office can confirm title requirements, settlement costs and the order of the two transactions. Do not treat a funding review as legal advice or as a substitute for the closing office's instructions.",
    "whyHeading": "A funding review built around your Texas City file",
    "why": [
      "Texas City developed as a port community on the mainland side of Galveston Bay. For a bay-area deal, include any available survey, flood and insurance records. The purchase and resale files still need their own contracts and closing instructions.",
      "Our review starts with the actual purchase and resale agreements for your Texas City property. Tell us which end buyer and closing office are involved so any unresolved conditions can be identified.",
      "Our published fee schedule gives you a starting point for estimating transaction costs. Review the written funding terms and the closing office's separate charges before deciding whether the deal works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "For a bay-area deal, include any available survey, flood and insurance records. The purchase and resale files still need their own contracts and closing instructions. Include the purchase and resale prices and your target closing date."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "How should I describe a Texas City property?",
        "a": "Texas City developed as a port community on the mainland side of Galveston Bay. For a bay-area deal, include any available survey, flood and insurance records. The purchase and resale files still need their own contracts and closing instructions."
      },
      {
        "q": "What should my Texas City submission include?",
        "a": "Send the exact Texas City address, purchase price, resale price and closing office details. Include available documents and identify any known occupancy, title or contract questions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "friendswood",
      "galveston"
    ],
    "blurb": "Texas City developed as a port community on the mainland side of Galveston Bay."
  },
  {
    "slug": "galveston",
    "name": "Galveston",
    "state": "TX",
    "stateName": "Texas",
    "county": "Galveston County",
    "formName": "Houston-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Galveston, TX | Houston Wholesale Double Close",
    "description": "Transactional funding review for wholesale double closings in Galveston, Texas. View our fee schedule and submit your purchase and resale details.",
    "h1Bottom": "in Galveston, Texas",
    "hero": "Galveston is a barrier-island city with Victorian architecture and historic streets. Island properties call for attention to parcel-specific insurance, flood and any historic restrictions. Tell us which documents are available without assuming that a nearby property follows the same rules. Our transactional funding review connects your purchase contract, resale contract and closing arrangements for a double closing in Galveston. Submit the property address, both prices and your closing office so we can review the file; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Galveston double closing",
    "localNote": "Island properties call for attention to parcel-specific insurance, flood and any historic restrictions. Tell us which documents are available without assuming that a nearby property follows the same rules. Your closing office can confirm title requirements, settlement costs and the order of the two transactions. Do not treat a funding review as legal advice or as a substitute for the closing office's instructions.",
    "whyHeading": "A funding review built around your Galveston file",
    "why": [
      "Galveston is a barrier-island city with Victorian architecture and historic streets. Island properties call for attention to parcel-specific insurance, flood and any historic restrictions. Tell us which documents are available without assuming that a nearby property follows the same rules.",
      "Our review starts with the actual purchase and resale agreements for your Galveston property. Tell us which end buyer and closing office are involved so any unresolved conditions can be identified.",
      "Our published fee schedule gives you a starting point for estimating transaction costs. Review the written funding terms and the closing office's separate charges before deciding whether the deal works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Island properties call for attention to parcel-specific insurance, flood and any historic restrictions. Tell us which documents are available without assuming that a nearby property follows the same rules. Include the purchase and resale prices and your target closing date."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "How should I describe a Galveston property?",
        "a": "Galveston is a barrier-island city with Victorian architecture and historic streets. Island properties call for attention to parcel-specific insurance, flood and any historic restrictions. Tell us which documents are available without assuming that a nearby property follows the same rules."
      },
      {
        "q": "What should my Galveston submission include?",
        "a": "Send the exact Galveston address, purchase price, resale price and closing office details. Include available documents and identify any known occupancy, title or contract questions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "texas-city",
      "conroe"
    ],
    "blurb": "Galveston is a barrier-island city with Victorian architecture and historic streets."
  },
  {
    "slug": "conroe",
    "name": "Conroe",
    "state": "TX",
    "stateName": "Texas",
    "county": "Montgomery County",
    "formName": "Houston-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Conroe, TX | Houston Wholesale Double Close",
    "description": "Transactional funding review for wholesale double closings in Conroe, Texas. View our fee schedule and submit your purchase and resale details.",
    "h1Bottom": "in Conroe, Texas",
    "hero": "Conroe has a historic downtown with cultural and community destinations. Identify whether the property is near downtown or in a different part of the city. Provide the actual address, legal description and resale terms for a property-specific review. Our transactional funding review connects your purchase contract, resale contract and closing arrangements for a double closing in Conroe. Submit the property address, both prices and your closing office so we can review the file; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a Conroe double closing",
    "localNote": "Identify whether the property is near downtown or in a different part of the city. Provide the actual address, legal description and resale terms for a property-specific review. Your closing office can confirm title requirements, settlement costs and the order of the two transactions. Do not treat a funding review as legal advice or as a substitute for the closing office's instructions.",
    "whyHeading": "A funding review built around your Conroe file",
    "why": [
      "Conroe has a historic downtown with cultural and community destinations. Identify whether the property is near downtown or in a different part of the city. Provide the actual address, legal description and resale terms for a property-specific review.",
      "Our review starts with the actual purchase and resale agreements for your Conroe property. Tell us which end buyer and closing office are involved so any unresolved conditions can be identified.",
      "Our published fee schedule gives you a starting point for estimating transaction costs. Review the written funding terms and the closing office's separate charges before deciding whether the deal works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Identify whether the property is near downtown or in a different part of the city. Provide the actual address, legal description and resale terms for a property-specific review. Include the purchase and resale prices and your target closing date."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "How should I describe a Conroe property?",
        "a": "Conroe has a historic downtown with cultural and community destinations. Identify whether the property is near downtown or in a different part of the city. Provide the actual address, legal description and resale terms for a property-specific review."
      },
      {
        "q": "What should my Conroe submission include?",
        "a": "Send the exact Conroe address, purchase price, resale price and closing office details. Include available documents and identify any known occupancy, title or contract questions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "galveston",
      "the-woodlands"
    ],
    "blurb": "Conroe has a historic downtown with cultural and community destinations."
  },
  {
    "slug": "the-woodlands",
    "name": "The Woodlands",
    "state": "TX",
    "stateName": "Texas",
    "county": "Montgomery County",
    "formName": "Houston-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in The Woodlands, TX | Houston Wholesale Double Close",
    "description": "Transactional funding review for wholesale double closings in The Woodlands, Texas. View our fee schedule and submit your purchase and resale details.",
    "h1Bottom": "in The Woodlands, Texas",
    "hero": "The Woodlands is a township community north of Houston with its own visitor destinations. Provide the village or subdivision along with the street address. Share any association documents and transfer requirements already supplied for the property. Our transactional funding review connects your purchase contract, resale contract and closing arrangements for a double closing in The Woodlands. Submit the property address, both prices and your closing office so we can review the file; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Preparing a The Woodlands double closing",
    "localNote": "Provide the village or subdivision along with the street address. Share any association documents and transfer requirements already supplied for the property. Your closing office can confirm title requirements, settlement costs and the order of the two transactions. Do not treat a funding review as legal advice or as a substitute for the closing office's instructions.",
    "whyHeading": "A funding review built around your The Woodlands file",
    "why": [
      "The Woodlands is a township community north of Houston with its own visitor destinations. Provide the village or subdivision along with the street address. Share any association documents and transfer requirements already supplied for the property.",
      "Our review starts with the actual purchase and resale agreements for your The Woodlands property. Tell us which end buyer and closing office are involved so any unresolved conditions can be identified.",
      "Our published fee schedule gives you a starting point for estimating transaction costs. Review the written funding terms and the closing office's separate charges before deciding whether the deal works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Provide the village or subdivision along with the street address. Share any association documents and transfer requirements already supplied for the property. Include the purchase and resale prices and your target closing date."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "How should I describe a The Woodlands property?",
        "a": "The Woodlands is a township community north of Houston with its own visitor destinations. Provide the village or subdivision along with the street address. Share any association documents and transfer requirements already supplied for the property."
      },
      {
        "q": "What should my The Woodlands submission include?",
        "a": "Send the exact The Woodlands address, purchase price, resale price and closing office details. Include available documents and identify any known occupancy, title or contract questions."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "conroe"
    ],
    "blurb": "The Woodlands is a township community north of Houston with its own visitor destinations."
  },
  {
    "slug": "katy",
    "name": "Katy",
    "state": "TX",
    "stateName": "Texas",
    "county": "Harris County",
    "formName": "Houston-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Katy, TX | Houston Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Katy, Texas. Submit the property and contracts and review the published fee schedule.",
    "h1Bottom": "in Katy, Texas",
    "hero": "Katy grew from Cane Island and the M-K-T railroad, with rice farming central to its early economy. A Katy postal address and the incorporated city boundary are not the same description. Give the exact parcel and subdivision so your closing office can identify the jurisdiction. Our double close funding review begins with the purchase contract, proposed resale and closing-office arrangements for that specific property. Send the address, both prices and available documents; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Your Katy property and closing file",
    "localNote": "A Katy postal address and the incorporated city boundary are not the same description. Give the exact parcel and subdivision so your closing office can identify the jurisdiction. The two transactions need their own settlement records and agreed funding instructions. Your closing office can explain how title and contract conditions affect the proposed sequence.",
    "whyHeading": "Review the Katy deal on its own terms",
    "why": [
      "Katy grew from Cane Island and the M-K-T railroad, with rice farming central to its early economy. A Katy postal address and the incorporated city boundary are not the same description. Give the exact parcel and subdivision so your closing office can identify the jurisdiction.",
      "A Katy funding request needs more than a projected resale price. Identify the end buyer, provide the contracts and explain any conditions still open.",
      "Our fee schedule helps you estimate the funding charge before closing. Ask the closing office about separate settlement costs and confirm the written funding terms for the file."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "A Katy postal address and the incorporated city boundary are not the same description. Give the exact parcel and subdivision so your closing office can identify the jurisdiction. Send the purchase and resale prices with the documents you have."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local information matters for a Katy deal?",
        "a": "Katy grew from Cane Island and the M-K-T railroad, with rice farming central to its early economy. A Katy postal address and the incorporated city boundary are not the same description. Give the exact parcel and subdivision so your closing office can identify the jurisdiction."
      },
      {
        "q": "What should I send for a Katy funding review?",
        "a": "Provide the Katy property address, both contracts, the end buyer's status and your closing office. Explain any missing documents or unresolved conditions rather than assuming they will be cleared."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "houston"
    ],
    "blurb": "Katy grew from Cane Island and the M-K-T railroad, with rice farming central to its early economy."
  },
  {
    "slug": "tomball",
    "name": "Tomball",
    "state": "TX",
    "stateName": "Texas",
    "county": "Harris County",
    "formName": "Houston-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Tomball, TX | Houston Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Tomball, Texas. Submit the property and contracts and review the published fee schedule.",
    "h1Bottom": "in Tomball, Texas",
    "hero": "Tomball preserves the history of its railroad-town roots. For a property around the town center, identify the actual lot and any survey already in hand. The closing file needs the legal description, not a broad description of the historic area. Our double close funding review begins with the purchase contract, proposed resale and closing-office arrangements for that specific property. Send the address, both prices and available documents; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Your Tomball property and closing file",
    "localNote": "For a property around the town center, identify the actual lot and any survey already in hand. The closing file needs the legal description, not a broad description of the historic area. The two transactions need their own settlement records and agreed funding instructions. Your closing office can explain how title and contract conditions affect the proposed sequence.",
    "whyHeading": "Review the Tomball deal on its own terms",
    "why": [
      "Tomball preserves the history of its railroad-town roots. For a property around the town center, identify the actual lot and any survey already in hand. The closing file needs the legal description, not a broad description of the historic area.",
      "A Tomball funding request needs more than a projected resale price. Identify the end buyer, provide the contracts and explain any conditions still open.",
      "Our fee schedule helps you estimate the funding charge before closing. Ask the closing office about separate settlement costs and confirm the written funding terms for the file."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "For a property around the town center, identify the actual lot and any survey already in hand. The closing file needs the legal description, not a broad description of the historic area. Send the purchase and resale prices with the documents you have."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local information matters for a Tomball deal?",
        "a": "Tomball preserves the history of its railroad-town roots. For a property around the town center, identify the actual lot and any survey already in hand. The closing file needs the legal description, not a broad description of the historic area."
      },
      {
        "q": "What should I send for a Tomball funding review?",
        "a": "Provide the Tomball property address, both contracts, the end buyer's status and your closing office. Explain any missing documents or unresolved conditions rather than assuming they will be cleared."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "houston"
    ],
    "blurb": "Tomball preserves the history of its railroad-town roots."
  },
  {
    "slug": "humble",
    "name": "Humble",
    "state": "TX",
    "stateName": "Texas",
    "county": "Harris County",
    "formName": "Houston-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Humble, TX | Houston Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Humble, Texas. Submit the property and contracts and review the published fee schedule.",
    "h1Bottom": "in Humble, Texas",
    "hero": "Humble's community history includes both its early settlement and the development of the oil industry. Use the property records to distinguish the incorporated city from nearby places sharing a postal label. Tell us whether any survey or ownership documents are missing. Our double close funding review begins with the purchase contract, proposed resale and closing-office arrangements for that specific property. Send the address, both prices and available documents; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Your Humble property and closing file",
    "localNote": "Use the property records to distinguish the incorporated city from nearby places sharing a postal label. Tell us whether any survey or ownership documents are missing. The two transactions need their own settlement records and agreed funding instructions. Your closing office can explain how title and contract conditions affect the proposed sequence.",
    "whyHeading": "Review the Humble deal on its own terms",
    "why": [
      "Humble's community history includes both its early settlement and the development of the oil industry. Use the property records to distinguish the incorporated city from nearby places sharing a postal label. Tell us whether any survey or ownership documents are missing.",
      "A Humble funding request needs more than a projected resale price. Identify the end buyer, provide the contracts and explain any conditions still open.",
      "Our fee schedule helps you estimate the funding charge before closing. Ask the closing office about separate settlement costs and confirm the written funding terms for the file."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Use the property records to distinguish the incorporated city from nearby places sharing a postal label. Tell us whether any survey or ownership documents are missing. Send the purchase and resale prices with the documents you have."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local information matters for a Humble deal?",
        "a": "Humble's community history includes both its early settlement and the development of the oil industry. Use the property records to distinguish the incorporated city from nearby places sharing a postal label. Tell us whether any survey or ownership documents are missing."
      },
      {
        "q": "What should I send for a Humble funding review?",
        "a": "Provide the Humble property address, both contracts, the end buyer's status and your closing office. Explain any missing documents or unresolved conditions rather than assuming they will be cleared."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "houston"
    ],
    "blurb": "Humble's community history includes both its early settlement and the development of the oil industry."
  },
  {
    "slug": "richmond",
    "name": "Richmond",
    "state": "TX",
    "stateName": "Texas",
    "county": "Fort Bend County",
    "formName": "Houston-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Richmond, TX | Houston Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Richmond, Texas. Submit the property and contracts and review the published fee schedule.",
    "h1Bottom": "in Richmond, Texas",
    "hero": "Richmond preserves its history as a Fort Bend community on the Brazos River. A river-area description cannot establish a particular property's flood status. Supply parcel-specific information and any insurance or survey records you have. Our double close funding review begins with the purchase contract, proposed resale and closing-office arrangements for that specific property. Send the address, both prices and available documents; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Your Richmond property and closing file",
    "localNote": "A river-area description cannot establish a particular property's flood status. Supply parcel-specific information and any insurance or survey records you have. The two transactions need their own settlement records and agreed funding instructions. Your closing office can explain how title and contract conditions affect the proposed sequence.",
    "whyHeading": "Review the Richmond deal on its own terms",
    "why": [
      "Richmond preserves its history as a Fort Bend community on the Brazos River. A river-area description cannot establish a particular property's flood status. Supply parcel-specific information and any insurance or survey records you have.",
      "A Richmond funding request needs more than a projected resale price. Identify the end buyer, provide the contracts and explain any conditions still open.",
      "Our fee schedule helps you estimate the funding charge before closing. Ask the closing office about separate settlement costs and confirm the written funding terms for the file."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "A river-area description cannot establish a particular property's flood status. Supply parcel-specific information and any insurance or survey records you have. Send the purchase and resale prices with the documents you have."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local information matters for a Richmond deal?",
        "a": "Richmond preserves its history as a Fort Bend community on the Brazos River. A river-area description cannot establish a particular property's flood status. Supply parcel-specific information and any insurance or survey records you have."
      },
      {
        "q": "What should I send for a Richmond funding review?",
        "a": "Provide the Richmond property address, both contracts, the end buyer's status and your closing office. Explain any missing documents or unresolved conditions rather than assuming they will be cleared."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "houston"
    ],
    "blurb": "Richmond preserves its history as a Fort Bend community on the Brazos River."
  },
  {
    "slug": "stafford",
    "name": "Stafford",
    "state": "TX",
    "stateName": "Texas",
    "county": "Fort Bend County",
    "formName": "Houston-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Stafford, TX | Houston Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Stafford, Texas. Submit the property and contracts and review the published fee schedule.",
    "h1Bottom": "in Stafford, Texas",
    "hero": "Stafford developed around its railroad connection and grew into a distinct southwest metro community. Clarify the actual municipality and subdivision before preparing the purchase and resale files. Share any available association documents rather than assuming the terms for a nearby property. Our double close funding review begins with the purchase contract, proposed resale and closing-office arrangements for that specific property. Send the address, both prices and available documents; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Your Stafford property and closing file",
    "localNote": "Clarify the actual municipality and subdivision before preparing the purchase and resale files. Share any available association documents rather than assuming the terms for a nearby property. The two transactions need their own settlement records and agreed funding instructions. Your closing office can explain how title and contract conditions affect the proposed sequence.",
    "whyHeading": "Review the Stafford deal on its own terms",
    "why": [
      "Stafford developed around its railroad connection and grew into a distinct southwest metro community. Clarify the actual municipality and subdivision before preparing the purchase and resale files. Share any available association documents rather than assuming the terms for a nearby property.",
      "A Stafford funding request needs more than a projected resale price. Identify the end buyer, provide the contracts and explain any conditions still open.",
      "Our fee schedule helps you estimate the funding charge before closing. Ask the closing office about separate settlement costs and confirm the written funding terms for the file."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Clarify the actual municipality and subdivision before preparing the purchase and resale files. Share any available association documents rather than assuming the terms for a nearby property. Send the purchase and resale prices with the documents you have."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local information matters for a Stafford deal?",
        "a": "Stafford developed around its railroad connection and grew into a distinct southwest metro community. Clarify the actual municipality and subdivision before preparing the purchase and resale files. Share any available association documents rather than assuming the terms for a nearby property."
      },
      {
        "q": "What should I send for a Stafford funding review?",
        "a": "Provide the Stafford property address, both contracts, the end buyer's status and your closing office. Explain any missing documents or unresolved conditions rather than assuming they will be cleared."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "houston"
    ],
    "blurb": "Stafford developed around its railroad connection and grew into a distinct southwest metro community."
  },
  {
    "slug": "lake-jackson",
    "name": "Lake Jackson",
    "state": "TX",
    "stateName": "Texas",
    "county": "Brazoria County",
    "formName": "Houston-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Lake Jackson, TX | Houston Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Lake Jackson, Texas. Submit the property and contracts and review the published fee schedule.",
    "h1Bottom": "in Lake Jackson, Texas",
    "hero": "Lake Jackson was developed as a planned community, giving it a different origin from nearby older towns. A planned-community history is not evidence of a particular lot's restrictions. Include the survey and any recorded or association documents already provided for the property. Our double close funding review begins with the purchase contract, proposed resale and closing-office arrangements for that specific property. Send the address, both prices and available documents; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Your Lake Jackson property and closing file",
    "localNote": "A planned-community history is not evidence of a particular lot's restrictions. Include the survey and any recorded or association documents already provided for the property. The two transactions need their own settlement records and agreed funding instructions. Your closing office can explain how title and contract conditions affect the proposed sequence.",
    "whyHeading": "Review the Lake Jackson deal on its own terms",
    "why": [
      "Lake Jackson was developed as a planned community, giving it a different origin from nearby older towns. A planned-community history is not evidence of a particular lot's restrictions. Include the survey and any recorded or association documents already provided for the property.",
      "A Lake Jackson funding request needs more than a projected resale price. Identify the end buyer, provide the contracts and explain any conditions still open.",
      "Our fee schedule helps you estimate the funding charge before closing. Ask the closing office about separate settlement costs and confirm the written funding terms for the file."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "A planned-community history is not evidence of a particular lot's restrictions. Include the survey and any recorded or association documents already provided for the property. Send the purchase and resale prices with the documents you have."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local information matters for a Lake Jackson deal?",
        "a": "Lake Jackson was developed as a planned community, giving it a different origin from nearby older towns. A planned-community history is not evidence of a particular lot's restrictions. Include the survey and any recorded or association documents already provided for the property."
      },
      {
        "q": "What should I send for a Lake Jackson funding review?",
        "a": "Provide the Lake Jackson property address, both contracts, the end buyer's status and your closing office. Explain any missing documents or unresolved conditions rather than assuming they will be cleared."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "houston"
    ],
    "blurb": "Lake Jackson was developed as a planned community, giving it a different origin from nearby older towns."
  },
  {
    "slug": "alvin",
    "name": "Alvin",
    "state": "TX",
    "stateName": "Texas",
    "county": "Brazoria County",
    "formName": "Houston-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Alvin, TX | Houston Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Alvin, Texas. Submit the property and contracts and review the published fee schedule.",
    "h1Bottom": "in Alvin, Texas",
    "hero": "Alvin traces its development to the railroad and the surrounding agricultural community. Separate the exact property description from the city's agricultural history. Include any existing survey and explain whether the deal involves a home, land or another property type. Our double close funding review begins with the purchase contract, proposed resale and closing-office arrangements for that specific property. Send the address, both prices and available documents; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Your Alvin property and closing file",
    "localNote": "Separate the exact property description from the city's agricultural history. Include any existing survey and explain whether the deal involves a home, land or another property type. The two transactions need their own settlement records and agreed funding instructions. Your closing office can explain how title and contract conditions affect the proposed sequence.",
    "whyHeading": "Review the Alvin deal on its own terms",
    "why": [
      "Alvin traces its development to the railroad and the surrounding agricultural community. Separate the exact property description from the city's agricultural history. Include any existing survey and explain whether the deal involves a home, land or another property type.",
      "A Alvin funding request needs more than a projected resale price. Identify the end buyer, provide the contracts and explain any conditions still open.",
      "Our fee schedule helps you estimate the funding charge before closing. Ask the closing office about separate settlement costs and confirm the written funding terms for the file."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Separate the exact property description from the city's agricultural history. Include any existing survey and explain whether the deal involves a home, land or another property type. Send the purchase and resale prices with the documents you have."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local information matters for a Alvin deal?",
        "a": "Alvin traces its development to the railroad and the surrounding agricultural community. Separate the exact property description from the city's agricultural history. Include any existing survey and explain whether the deal involves a home, land or another property type."
      },
      {
        "q": "What should I send for a Alvin funding review?",
        "a": "Provide the Alvin property address, both contracts, the end buyer's status and your closing office. Explain any missing documents or unresolved conditions rather than assuming they will be cleared."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "houston"
    ],
    "blurb": "Alvin traces its development to the railroad and the surrounding agricultural community."
  },
  {
    "slug": "angleton",
    "name": "Angleton",
    "state": "TX",
    "stateName": "Texas",
    "county": "Brazoria County",
    "formName": "Houston-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Angleton, TX | Houston Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Angleton, Texas. Submit the property and contracts and review the published fee schedule.",
    "h1Bottom": "in Angleton, Texas",
    "hero": "Angleton developed around the railroad and became the seat of Brazoria County. A county-seat location does not determine the settlement requirements for a parcel. Give the exact address and title-office details so the review stays tied to the actual file. Our double close funding review begins with the purchase contract, proposed resale and closing-office arrangements for that specific property. Send the address, both prices and available documents; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Your Angleton property and closing file",
    "localNote": "A county-seat location does not determine the settlement requirements for a parcel. Give the exact address and title-office details so the review stays tied to the actual file. The two transactions need their own settlement records and agreed funding instructions. Your closing office can explain how title and contract conditions affect the proposed sequence.",
    "whyHeading": "Review the Angleton deal on its own terms",
    "why": [
      "Angleton developed around the railroad and became the seat of Brazoria County. A county-seat location does not determine the settlement requirements for a parcel. Give the exact address and title-office details so the review stays tied to the actual file.",
      "A Angleton funding request needs more than a projected resale price. Identify the end buyer, provide the contracts and explain any conditions still open.",
      "Our fee schedule helps you estimate the funding charge before closing. Ask the closing office about separate settlement costs and confirm the written funding terms for the file."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "A county-seat location does not determine the settlement requirements for a parcel. Give the exact address and title-office details so the review stays tied to the actual file. Send the purchase and resale prices with the documents you have."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local information matters for a Angleton deal?",
        "a": "Angleton developed around the railroad and became the seat of Brazoria County. A county-seat location does not determine the settlement requirements for a parcel. Give the exact address and title-office details so the review stays tied to the actual file."
      },
      {
        "q": "What should I send for a Angleton funding review?",
        "a": "Provide the Angleton property address, both contracts, the end buyer's status and your closing office. Explain any missing documents or unresolved conditions rather than assuming they will be cleared."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "houston"
    ],
    "blurb": "Angleton developed around the railroad and became the seat of Brazoria County."
  },
  {
    "slug": "dickinson",
    "name": "Dickinson",
    "state": "TX",
    "stateName": "Texas",
    "county": "Galveston County",
    "formName": "Houston-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Dickinson, TX | Houston Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Dickinson, Texas. Submit the property and contracts and review the published fee schedule.",
    "h1Bottom": "in Dickinson, Texas",
    "hero": "Dickinson grew along Dickinson Bayou, with the waterway part of its local identity. For a bayou-area property, provide any parcel-specific flood or insurance information already available. Your closing office can identify the records needed for the two transactions. Our double close funding review begins with the purchase contract, proposed resale and closing-office arrangements for that specific property. Send the address, both prices and available documents; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Your Dickinson property and closing file",
    "localNote": "For a bayou-area property, provide any parcel-specific flood or insurance information already available. Your closing office can identify the records needed for the two transactions. The two transactions need their own settlement records and agreed funding instructions. Your closing office can explain how title and contract conditions affect the proposed sequence.",
    "whyHeading": "Review the Dickinson deal on its own terms",
    "why": [
      "Dickinson grew along Dickinson Bayou, with the waterway part of its local identity. For a bayou-area property, provide any parcel-specific flood or insurance information already available. Your closing office can identify the records needed for the two transactions.",
      "A Dickinson funding request needs more than a projected resale price. Identify the end buyer, provide the contracts and explain any conditions still open.",
      "Our fee schedule helps you estimate the funding charge before closing. Ask the closing office about separate settlement costs and confirm the written funding terms for the file."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "For a bayou-area property, provide any parcel-specific flood or insurance information already available. Your closing office can identify the records needed for the two transactions. Send the purchase and resale prices with the documents you have."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local information matters for a Dickinson deal?",
        "a": "Dickinson grew along Dickinson Bayou, with the waterway part of its local identity. For a bayou-area property, provide any parcel-specific flood or insurance information already available. Your closing office can identify the records needed for the two transactions."
      },
      {
        "q": "What should I send for a Dickinson funding review?",
        "a": "Provide the Dickinson property address, both contracts, the end buyer's status and your closing office. Explain any missing documents or unresolved conditions rather than assuming they will be cleared."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "houston"
    ],
    "blurb": "Dickinson grew along Dickinson Bayou, with the waterway part of its local identity."
  },
  {
    "slug": "seabrook",
    "name": "Seabrook",
    "state": "TX",
    "stateName": "Texas",
    "county": "Harris County",
    "formName": "Houston-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Seabrook, TX | Houston Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Seabrook, Texas. Submit the property and contracts and review the published fee schedule.",
    "h1Bottom": "in Seabrook, Texas",
    "hero": "Seabrook's history is tied to the bay and its waterfront community. Describe any known waterfront conditions in the deal details. Do not substitute a general coastal description for the property's survey or insurance records. Our double close funding review begins with the purchase contract, proposed resale and closing-office arrangements for that specific property. Send the address, both prices and available documents; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Your Seabrook property and closing file",
    "localNote": "Describe any known waterfront conditions in the deal details. Do not substitute a general coastal description for the property's survey or insurance records. The two transactions need their own settlement records and agreed funding instructions. Your closing office can explain how title and contract conditions affect the proposed sequence.",
    "whyHeading": "Review the Seabrook deal on its own terms",
    "why": [
      "Seabrook's history is tied to the bay and its waterfront community. Describe any known waterfront conditions in the deal details. Do not substitute a general coastal description for the property's survey or insurance records.",
      "A Seabrook funding request needs more than a projected resale price. Identify the end buyer, provide the contracts and explain any conditions still open.",
      "Our fee schedule helps you estimate the funding charge before closing. Ask the closing office about separate settlement costs and confirm the written funding terms for the file."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Describe any known waterfront conditions in the deal details. Do not substitute a general coastal description for the property's survey or insurance records. Send the purchase and resale prices with the documents you have."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local information matters for a Seabrook deal?",
        "a": "Seabrook's history is tied to the bay and its waterfront community. Describe any known waterfront conditions in the deal details. Do not substitute a general coastal description for the property's survey or insurance records."
      },
      {
        "q": "What should I send for a Seabrook funding review?",
        "a": "Provide the Seabrook property address, both contracts, the end buyer's status and your closing office. Explain any missing documents or unresolved conditions rather than assuming they will be cleared."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "houston"
    ],
    "blurb": "Seabrook's history is tied to the bay and its waterfront community."
  },
  {
    "slug": "webster",
    "name": "Webster",
    "state": "TX",
    "stateName": "Texas",
    "county": "Harris County",
    "formName": "Houston-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Webster, TX | Houston Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Webster, Texas. Submit the property and contracts and review the published fee schedule.",
    "h1Bottom": "in Webster, Texas",
    "hero": "Webster grew from a railroad community and later became connected with the region's space-industry development. A Clear Lake-area location is useful context, but the resale plan must identify the actual buyer and property. Send the contracts and closing arrangements together. Our double close funding review begins with the purchase contract, proposed resale and closing-office arrangements for that specific property. Send the address, both prices and available documents; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Your Webster property and closing file",
    "localNote": "A Clear Lake-area location is useful context, but the resale plan must identify the actual buyer and property. Send the contracts and closing arrangements together. The two transactions need their own settlement records and agreed funding instructions. Your closing office can explain how title and contract conditions affect the proposed sequence.",
    "whyHeading": "Review the Webster deal on its own terms",
    "why": [
      "Webster grew from a railroad community and later became connected with the region's space-industry development. A Clear Lake-area location is useful context, but the resale plan must identify the actual buyer and property. Send the contracts and closing arrangements together.",
      "A Webster funding request needs more than a projected resale price. Identify the end buyer, provide the contracts and explain any conditions still open.",
      "Our fee schedule helps you estimate the funding charge before closing. Ask the closing office about separate settlement costs and confirm the written funding terms for the file."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "A Clear Lake-area location is useful context, but the resale plan must identify the actual buyer and property. Send the contracts and closing arrangements together. Send the purchase and resale prices with the documents you have."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local information matters for a Webster deal?",
        "a": "Webster grew from a railroad community and later became connected with the region's space-industry development. A Clear Lake-area location is useful context, but the resale plan must identify the actual buyer and property. Send the contracts and closing arrangements together."
      },
      {
        "q": "What should I send for a Webster funding review?",
        "a": "Provide the Webster property address, both contracts, the end buyer's status and your closing office. Explain any missing documents or unresolved conditions rather than assuming they will be cleared."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "houston"
    ],
    "blurb": "Webster grew from a railroad community and later became connected with the region's space-industry development."
  },
  {
    "slug": "nassau-bay",
    "name": "Nassau Bay",
    "state": "TX",
    "stateName": "Texas",
    "county": "Harris County",
    "formName": "Houston-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Nassau Bay, TX | Houston Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Nassau Bay, Texas. Submit the property and contracts and review the published fee schedule.",
    "h1Bottom": "in Nassau Bay, Texas",
    "hero": "Nassau Bay developed alongside the Johnson Space Center area. Use the exact parcel and subdivision when describing a Nassau Bay home. Include available survey and association information for the closing office to review. Our double close funding review begins with the purchase contract, proposed resale and closing-office arrangements for that specific property. Send the address, both prices and available documents; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Your Nassau Bay property and closing file",
    "localNote": "Use the exact parcel and subdivision when describing a Nassau Bay home. Include available survey and association information for the closing office to review. The two transactions need their own settlement records and agreed funding instructions. Your closing office can explain how title and contract conditions affect the proposed sequence.",
    "whyHeading": "Review the Nassau Bay deal on its own terms",
    "why": [
      "Nassau Bay developed alongside the Johnson Space Center area. Use the exact parcel and subdivision when describing a Nassau Bay home. Include available survey and association information for the closing office to review.",
      "A Nassau Bay funding request needs more than a projected resale price. Identify the end buyer, provide the contracts and explain any conditions still open.",
      "Our fee schedule helps you estimate the funding charge before closing. Ask the closing office about separate settlement costs and confirm the written funding terms for the file."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Use the exact parcel and subdivision when describing a Nassau Bay home. Include available survey and association information for the closing office to review. Send the purchase and resale prices with the documents you have."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local information matters for a Nassau Bay deal?",
        "a": "Nassau Bay developed alongside the Johnson Space Center area. Use the exact parcel and subdivision when describing a Nassau Bay home. Include available survey and association information for the closing office to review."
      },
      {
        "q": "What should I send for a Nassau Bay funding review?",
        "a": "Provide the Nassau Bay property address, both contracts, the end buyer's status and your closing office. Explain any missing documents or unresolved conditions rather than assuming they will be cleared."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "houston"
    ],
    "blurb": "Nassau Bay developed alongside the Johnson Space Center area."
  },
  {
    "slug": "west-university-place",
    "name": "West University Place",
    "state": "TX",
    "stateName": "Texas",
    "county": "Harris County",
    "formName": "Houston-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in West University Place, TX | Houston Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in West University Place, Texas. Submit the property and contracts and review the published fee schedule.",
    "h1Bottom": "in West University Place, Texas",
    "hero": "West University Place was developed as a residential community near Houston's university area. Confirm the legal description and any property restrictions rather than relying on the neighborhood name. Both sale contracts need to match the parcel being transferred. Our double close funding review begins with the purchase contract, proposed resale and closing-office arrangements for that specific property. Send the address, both prices and available documents; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Your West University Place property and closing file",
    "localNote": "Confirm the legal description and any property restrictions rather than relying on the neighborhood name. Both sale contracts need to match the parcel being transferred. The two transactions need their own settlement records and agreed funding instructions. Your closing office can explain how title and contract conditions affect the proposed sequence.",
    "whyHeading": "Review the West University Place deal on its own terms",
    "why": [
      "West University Place was developed as a residential community near Houston's university area. Confirm the legal description and any property restrictions rather than relying on the neighborhood name. Both sale contracts need to match the parcel being transferred.",
      "A West University Place funding request needs more than a projected resale price. Identify the end buyer, provide the contracts and explain any conditions still open.",
      "Our fee schedule helps you estimate the funding charge before closing. Ask the closing office about separate settlement costs and confirm the written funding terms for the file."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Confirm the legal description and any property restrictions rather than relying on the neighborhood name. Both sale contracts need to match the parcel being transferred. Send the purchase and resale prices with the documents you have."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local information matters for a West University Place deal?",
        "a": "West University Place was developed as a residential community near Houston's university area. Confirm the legal description and any property restrictions rather than relying on the neighborhood name. Both sale contracts need to match the parcel being transferred."
      },
      {
        "q": "What should I send for a West University Place funding review?",
        "a": "Provide the West University Place property address, both contracts, the end buyer's status and your closing office. Explain any missing documents or unresolved conditions rather than assuming they will be cleared."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "houston"
    ],
    "blurb": "West University Place was developed as a residential community near Houston's university area."
  },
  {
    "slug": "bellaire",
    "name": "Bellaire",
    "state": "TX",
    "stateName": "Texas",
    "county": "Harris County",
    "formName": "Houston-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Bellaire, TX | Houston Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Bellaire, Texas. Submit the property and contracts and review the published fee schedule.",
    "h1Bottom": "in Bellaire, Texas",
    "hero": "Bellaire began as a planned residential community southwest of central Houston. An established residential setting does not settle the title or survey questions for a particular home. Share the documents you have and flag any known ownership issues. Our double close funding review begins with the purchase contract, proposed resale and closing-office arrangements for that specific property. Send the address, both prices and available documents; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Your Bellaire property and closing file",
    "localNote": "An established residential setting does not settle the title or survey questions for a particular home. Share the documents you have and flag any known ownership issues. The two transactions need their own settlement records and agreed funding instructions. Your closing office can explain how title and contract conditions affect the proposed sequence.",
    "whyHeading": "Review the Bellaire deal on its own terms",
    "why": [
      "Bellaire began as a planned residential community southwest of central Houston. An established residential setting does not settle the title or survey questions for a particular home. Share the documents you have and flag any known ownership issues.",
      "A Bellaire funding request needs more than a projected resale price. Identify the end buyer, provide the contracts and explain any conditions still open.",
      "Our fee schedule helps you estimate the funding charge before closing. Ask the closing office about separate settlement costs and confirm the written funding terms for the file."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "An established residential setting does not settle the title or survey questions for a particular home. Share the documents you have and flag any known ownership issues. Send the purchase and resale prices with the documents you have."
      },
      {
        "title": "Review both contracts",
        "text": "We review the purchase, resale and funding request with the information you provide. Missing documents or unresolved title conditions may affect whether the file can proceed."
      },
      {
        "title": "Confirm the closing plan",
        "text": "If the file is approved, the closing team confirms funding instructions and settlement requirements. Both transactions must follow the agreed sequence and written terms."
      }
    ],
    "faqs": [
      {
        "q": "What local information matters for a Bellaire deal?",
        "a": "Bellaire began as a planned residential community southwest of central Houston. An established residential setting does not settle the title or survey questions for a particular home. Share the documents you have and flag any known ownership issues."
      },
      {
        "q": "What should I send for a Bellaire funding review?",
        "a": "Provide the Bellaire property address, both contracts, the end buyer's status and your closing office. Explain any missing documents or unresolved conditions rather than assuming they will be cleared."
      },
      {
        "q": "What is a double closing?",
        "a": "A double closing uses two separate sales of the same property. You purchase from the seller and then sell to your end buyer, subject to the contracts and closing requirements for each transaction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days, multiple closing companies and special paperwork can add costs, so confirm the written terms for your file."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review of your purchase, resale and closing arrangements. Funding depends on the specific file and the applicable terms."
      }
    ],
    "nearby": [
      "houston"
    ],
    "blurb": "Bellaire began as a planned residential community southwest of central Houston."
  }
];
