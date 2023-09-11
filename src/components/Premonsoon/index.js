import React from 'react'
import Table from '../Table'
import './styles.css'
import DamageTable from '../DamageTable'
import RoadsTable from '../RoadsTable'
import CumulativeDeathsInjuries from '../CumulativeDeathsInjuries'
import CumulativeDamagesInfrastructure from '../CumulativeDamagesInfrastructure'
import ReliefCamps from '../ReliefCamps'
import NdmaRelief from '../NdmaRelief'
import PdmaRelief from '../PdmaRelief'
import HumitarianagenciesRelief from '../HumitarianagenciesRelief'
import DamsReserviorsLevels from '../DamsReserviorsLevels'
import FloodAlert from '../FloodAlert';
import FloodIndia from '../FloodIndia'
import SummaryMonsson from '../SummaryMonsoon'
import RainfallMeasure from '../RainfallMeasure'
import { CalamityHit } from '../CalamityHit'
import { BISP } from '../BISP'
import GOP from '../../assets/images/GOP.png'
import NDMA from '../../assets/images/NDMA.png'
import { PictorialView } from '../PictorialView'
import { useState, useEffect } from 'react'
import jsPDF from 'jspdf'

const Premonsoon = () => {



  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const [generatingPDF, setGeneratingPDF] = useState(false);

  const phandleGeneratePdf = () => {
    setGeneratingPDF(true);
    var doc = new jsPDF("p", "pt", "a4");
    doc.html((document.querySelector("#ppdf-content-page-1")), {
      callback: function (pdf) {
        var pageCount = doc.internal.getNumberOfPages();
        pdf.deletePage(pageCount + 1);
        pdf.save("report.pdf")
        setGeneratingPDF(false)
      }
    });
  };

  return (

    <div >
      <div id="ppdf-content-page-1">
        <div style={generatingPDF ? { width: '587px', height: '842px', padding: '10px' } : null} className={`${!generatingPDF ? 'without-pdf' : null}`}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <img src={GOP} style={{ width: '50px', height: '50px', margin: '0', padding: '0' }} />
            <div>
              <h6 style={{ textAlign: 'center', fontSize: '0.7rem' }}>F.2 (E)/2023-NDMA (MW/SITREP-35)</h6>
              <h6 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '0.7rem' }}>Government of Pakistan</h6>
              <h6 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '0.7rem' }}>Prime Minister's Office</h6>
              <h6 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '0.7rem' }}>National Disaster Management Authority</h6>
              <h6 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '0.7rem' }}>Islamabad</h6>
            </div>
            <img src={NDMA} style={{ margin: '0', width: '50px', height: '50px', padding: '0' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', fontSize: '0.7rem' }}>
            <p className='date'>Dated: <span className='font-bold '>{currentDate}</span></p>
          </div>


          <h2 style={{ fontSize: '0.7rem' }}>Subject: <span style={{ fontSize: '0.7rem', marginLeft: '10px', marginTop: '4px', justifyContent: 'center', fontWeight: 'bold', textDecoration: 'underline' }} id="subject">NDMA Pre-monsoon 2023 - Daily Situation Report</span></h2>
          <div style={{ marginTop: '0.5rem', textAlign: 'justify', fontSize: '0.6rem' }}>
            <p>NDMA Pre-Monsoon 2023 Daily Situation Report No 62, covering period from
              1300 hours 25th August 2023 to 1300 hours 26th August 2023 is enclosed for information/
              necessary action, please.
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '3rem', fontSize: '0.6rem' }}>
            <div style={{ marginTop: '3rem' }}>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}><p className='font-bold'>(Muhammad Ali Khan)</p></div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}><p>Director (Response)</p></div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}><p>Telephone No: 051-9030924</p></div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}><p>Fax: 051-9030729</p></div>
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', marginTop: '2.5rem', gap: '1.25rem', fontSize: '0.6rem' }}>
              <span>To:</span>
              <div>
                <p style={{ textAlign: 'justify' }}>Federal Ministries & Departments (Interior, Planning, Food Security & Research),
                  National Health Services, Information & Broadcasting, Climate Change, Pakistan
                  Railways, Communications, Energy & Water Resources, Finance, Information and
                  Broadcasting (MOIB), Press Information Department (PID), Economic Affairs
                  Division (EAD)
                </p>
                <p>Chief Secretaries, Provincial Governments, GB and AJ&K</p>
                <p>Director Generals, PDMAs, GBDMA & SDMA</p>
                <p>Director Generals, PDMAs, GBDMA & SDMA</p>
                <p>Director Generals, Rescue 1122 (Punjab, Sindh, Balochistan, KP, GB & AJ&K)</p>
                <p>Director General, Climate Change and Coastal Development, Government of Sindh</p>
                <p>Director General, Sindh Coastal Development Authority, Karachi </p>
                <p>Director General, Balochistan Coastal Development Authority</p>
                <p>Chairman, National Highway Authority, Islamabad</p>
                <p>Inspector General, National Highways& Motorway Police, Islamabad</p>
                <p>Chairman, Pakistan Telecommunications Authority, Islamabad</p>
                <p>Chairman, Federal Flood Commission, Islamabad</p>
                <p>Chairman, Pakistan Tourism Development Corporation, Islamabad</p>
                <p>Managing Director, National Transmission & Dispatch Corporation, Lahore</p>
                <p>Principal Information Officer, Press Information Department, Islamabad</p>
                <p>Commissioner Islamabad</p>
                <p>Headquarters, Pakistan Maritime Security Agency, Karachi</p>
                <p>Deputy Commissioner Islamabad</p>
                <p>Joint Crises Management Cell, Joint Staff Headquarters, Chaklala Cantt</p>
                <p>Staff Duties Directorate (SD Coord), General Headquarters, Rawalpindi</p>
                <p>Military Operations Directorate (MO-4), General Headquarters, Rawalpindi Cantt</p>
                <p>ACNS (Operations), Naval Headquarters, Islamabad</p>
                <p>ACAS (Operations), Air Headquarters, Islamabad</p>
                <p>Headquarters, Frontier Works Organization (FWO), Rawalpindi</p>
                <p>GSO-1, Inter Services Public Relations, General Headquarters, Rawalpindi Cantt</p>
                <p>Headquarters, Pakistan Coast Guards, Karachi </p>
                <p>Divisional Superintendent, Pakistan Railways Karachi</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1.15rem', fontSize: '0.6rem' }}>
              <span>Cc:</span>
              <div>
                <p style={{ textAlign: 'justify' }}>Secretary to Prime Minister, Prime Minister’s Office, Islamabad</p>
                <p>Secretary, Cabinet Division, Islamabad</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.29rem', fontSize: '0.6rem' }}>
              <span>ID:</span>
              <div>
                <p style={{ textAlign: 'justify' }}>PRO</p>
                <p>DD (ICT)</p>
              </div>
            </div>
          </div>

          <div id="ppdf-content-page-2" style={generatingPDF ? { width: '587px', height: '842px', padding: '10px' } : null}>
            <h2 style={{ fontSize: '0.7rem', fontWeight: 'bold', textDecoration: 'underline', textAlign: 'center' }} className='start'>MONSOON 2023 - DAILY SITUATION REPORT NO -51</h2>
            <h2 style={{ fontSize: '0.7rem', fontWeight: 'bold', textAlign: 'center' }}>(PERIOD COVERED: 1300 HRS- 14 AUGUST2023 TO 1300 HRS - 15 AUGUST2023)</h2>
            <h2 style={{ fontSize: '0.7rem', textDecoration: 'underline', fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '0.5rem' }}>1. Casualties and Injuries (Last 24 hours)
            </h2>
            <Table category="Deaths" />
          </div>


          <div id="ppdf-content-page-13" style={generatingPDF ? { width: '587px', height: '842px', padding: '10px' } : null}>
            <Table category="Injuries" />
          </div>




          <div style={generatingPDF ? { width: '587px', height: '842px', padding: '10px' } : null}>
            <h2 style={{ fontSize: '0.7rem', textDecoration: 'underline', fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '0.5rem' }}>2. Damage of Infrastructure & Private Properties</h2>
            <DamageTable />
          </div>

          <div style={generatingPDF ? { width: '587px', height: '842px', padding: '10px' } : null}>
            <RoadsTable />
          </div>



          <div style={generatingPDF ? { width: '587px', height: '842px', padding: '10px' } : null}>
            
            <CumulativeDeathsInjuries />
          </div>

          <div style={generatingPDF ? { width: '587px', height: '842px', padding: '10px' } : null}>
            <CumulativeDamagesInfrastructure />
          </div>

          <div style={generatingPDF ? { width: '587px', height: '842px', padding: '10px' } : null}>
            <PictorialView />
          </div>

          <div style={generatingPDF ? { width: '587px', height: '842px', padding: '10px' } : null}>
            <CalamityHit />
          </div>


          <div style={generatingPDF ? { width: '587px', height: '842px', padding: '10px' } : null}>
            <BISP />
          </div>

          <div style={generatingPDF ? { width: '587px', height: '842px', padding: '10px' } : null}>
            <ReliefCamps />
          </div>
          <div style={generatingPDF ? { width: '587px', height: '842px', padding: '10px' } : null}>
            <NdmaRelief />
          </div>


          <div style={generatingPDF ? { width: '587px', height: '842px', padding: '10px' } : null}>
            <PdmaRelief />
          </div>


          <div style={generatingPDF ? { width: '587px', height: '842px', padding: '10px' } : null}>
            <HumitarianagenciesRelief />
          </div>

          <div style={generatingPDF ? { width: '587px', height: '842px', padding: '10px' } : null}>
            <DamsReserviorsLevels/>
          </div>



          <div style={generatingPDF ? { width: '587px', height: '842px', padding: '10px' } : null}>
            <FloodAlert />
          </div>


          <div style={generatingPDF ? { width: '587px', height: '842px', padding: '10px' } : null}>
            <FloodIndia />
          </div>


          <div style={generatingPDF ? { width: '587px', height: '842px', padding: '10px' } : null}>
            <SummaryMonsson />
          </div>


          <div style={generatingPDF ? { width: '587px', height: '842px', padding: '10px' } : null}>
            <RainfallMeasure />
          </div>

        </div>
      </div>

      <div className="flex justify-center items-center">
        <button
          type="button"
          className="bg-gray-300 hover:bg-gray-400 font-bold py-2 px-4 rounded m-6"
          onClick={phandleGeneratePdf}
        >
          Save as PDF
        </button>
      </div>

    </div>
  )
}

export default Premonsoon