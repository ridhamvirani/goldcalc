import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { PiCurrencyInrBold } from 'react-icons/pi';

const Home = () => {
    const [istrue,setistrue] = useState();
    const [islabour,setislabour] = useState();
    const [isweightvisible,setisweigntvisible] = useState(false)
    const [isgorsweightvisible,setisgrosweigntvisible] = useState(false)
    const [islabourruppes,setislabourrupees] = useState(false)
    const [islabourpr,setislabourpr] = useState(false)
    const [goldprice,setgoldprice] =useState(null);
    const [carat,setcarat] = useState();
    const [labour,setlabour] = useState();
    const [weight,setweight]=useState();
    const [grossweight,setgrossweight] = useState();
    const [diamondprice,setdiamondprice] = useState();
    const [hallmarkrate,sethallmark]=useState();
    const [rodiam,setrodiam]=useState();
    const[finalrate,setfinalrate] = useState(null);
    const [mino,setmino] = useState();

    useEffect(()=>{
        if(istrue === "weight"){
            setisweigntvisible(true)
            setisgrosweigntvisible(false);
        }
        if(istrue === "gw"){
            setisgrosweigntvisible(true)
            setisweigntvisible(false)
        }
    },[istrue])
    useEffect(()=>{
        if(islabour === "rupees"){
            setislabourrupees(true)
            setislabourpr(false);
        }
        if(islabour === "pr"){
            setislabourrupees(false)
            setislabourpr(true);
        }
    },[islabour])
    const generate = () =>{
        var getonlygoldprice = (goldprice * carat)/100

        if(islabourruppes){
            var getgoldpricewithlabour = parseFloat(getonlygoldprice) + parseFloat(labour);
        }
        if(islabourpr){
            var getlabour = (parseFloat(getonlygoldprice)* parseFloat(labour))/100;
            var getgoldpricewithlabour = parseFloat(getonlygoldprice) + parseFloat(getlabour);
        }
        var getpricebaseonweight;
        if(isweightvisible){
            getpricebaseonweight = parseFloat(getgoldpricewithlabour) * parseFloat(weight)
        }
        if(isgorsweightvisible){
            getpricebaseonweight = parseFloat(getgoldpricewithlabour) * parseFloat(grossweight)
        }
        var finalprice =parseFloat(getpricebaseonweight) + parseFloat(diamondprice) + parseFloat(hallmarkrate) + parseFloat(rodiam) + parseFloat(mino)
        var gst = (finalprice * 3)/100;;
        setfinalrate(finalprice+gst)
        
        
        
    }
    return (
        <div className='container'>
            <Row className='w-100 mx-auto'>
                <Col xl={6} lg={8} className='mx-auto  border border-1 border-secondary p-5'>
                <Row  className="">
                    <Col lg={3}  className=" py-2">
                        <label htmlFor="" className='fw-medium'>Gold Live rate:</label>
                    </Col>
                    <Col  className="">
                        <input type="number" placeholder='Enter Gold Live Rate'  onChange={(e)=>setgoldprice(e.target.value)} className='w-100 p-2 rounded-2 border-1 border-secondary' />
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col lg={3}  className=" py-2">
                        <label htmlFor="" className='fw-medium'>Gold Carat</label>
                    </Col>
                    <Col  className="">
                        <select name="gcarat" id="gcarat" onChange={(e)=>setcarat(e.target.value)} className='w-md-50 w-100 p-2'>
                            <option value="" disabled selected>Select carat</option>
                            <option value="92">22ct</option>
                            <option value="81">18ct</option>
                            <option value="67">14ct</option>
                            <option value="60">12ct</option>
                            <option value="52">10ct</option>
                            <option value="48">9ct</option>
                        </select>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col lg={3}  className=" py-2">
                        <label htmlFor="" className='fw-medium'>Labour:</label>
                    </Col>
                    <Col  className="">
                        <select name="weight" onChange={(e)=>setislabour(e.target.value)} className=' w-100 p-2'>
                            <option value="" disabled selected>Select labour</option>
                            <option value="rupees">labour in ruppees</option>
                            <option value="pr">labour in (%)</option>
                        </select>
                    </Col>
                </Row>
                {(islabourruppes)?<Row className="mt-3">
                    <Col lg={3}  className=" py-2">
                        <label htmlFor="" className='fw-medium'>Labour in ruppes:</label>
                    </Col>
                    <Col  className="">
                        <input type="number" placeholder='Enter labour rupees' onChange={(e)=>setlabour(e.target.value)} className='w-100 p-2 rounded-2 border-1 border-secondary' />
                    </Col>
                </Row>:null}
                {(islabourpr)?<Row className="mt-3">
                    <Col  lg={3}  className=" py-2">
                        <label htmlFor="" className='fw-medium'>labour in %:</label>
                    </Col>
                    <Col  className="">
                        <input type="number" placeholder='Enter labour %' onChange={(e)=>setlabour(e.target.value)} className='w-100 p-2 rounded-2 border-1 border-secondary' />
                    </Col>
                </Row>:null}
                <Row className="mt-3">
                    <Col  lg={3}  className=" py-2">
                        <label htmlFor="" className='fw-medium'>Weight:</label>
                    </Col>
                    <Col  className="">
                        <select name="weight" onChange={(e)=>setistrue(e.target.value)} className='w-md-50 w-100 p-2'>
                            <option value="" disabled selected>Select Weight</option>
                            <option value="weight">Weight</option>
                            <option value="gw">Gros Weight</option>
                        </select>
                    </Col>
                </Row>
                {(isweightvisible)?<Row className="mt-3">
                    <Col lg={3}  className=" py-2">
                        <label htmlFor="" className='fw-medium'>Weight:</label>
                    </Col>
                    <Col  className="">
                        <input type="number" placeholder='Enter Weight' onChange={(e)=>setweight(e.target.value)} className='w-100 p-2 rounded-2 border-1 border-secondary' />
                    </Col>
                </Row>:null}
                {(isgorsweightvisible)?<Row className="mt-3">
                    <Col lg={3}  className=" py-2">
                        <label htmlFor="" className='fw-medium'>Gross Weight:</label>
                    </Col>
                    <Col  className="">
                        <input type="number" placeholder='Enter Gross Weight' onChange={(e)=>setgrossweight(e.target.value)} className='w-100 p-2 rounded-2 border-1 border-secondary' />
                    </Col>
                </Row>:null}
                <Row className="mt-3">
                    <Col  lg={3}  className=" py-2">
                        <label htmlFor="" className='fw-medium'>Diamond Rate:</label>
                    </Col>
                    <Col  className="">
                        <input type="number" placeholder='Enter Diamond Rate' onChange={(e)=>setdiamondprice(e.target.value)} className='w-100 p-2 rounded-2 border-1 border-secondary' />
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col  lg={3}  className=" py-2">
                        <label htmlFor="" className='fw-medium'>Mino:</label>
                    </Col>
                    <Col  className="">
                        <input type="number" placeholder='Enter Mino Rate' onChange={(e)=>setmino(e.target.value)} className='w-100 p-2 rounded-2 border-1 border-secondary' />
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col lg={3}  className=" py-2">
                        <label htmlFor="" className='fw-medium'>Hallmark:</label>
                    </Col>
                    <Col  className="">
                        <input type="number" placeholder='Enter Hallmark Rate' onChange={(e)=>sethallmark(e.target.value)} className='w-100 p-2 rounded-2 border-1 border-secondary' />
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col lg={3}  className=" py-2">
                        <label htmlFor="" className='fw-medium'>Rodiam/Polish:</label>
                    </Col>
                    <Col  className="">
                        <input type="number" placeholder='Enter Rodiam/polish Rate' onChange={(e)=>setrodiam(e.target.value)} className='w-100 p-2 rounded-2 border-1 border-secondary' />
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xl={6} className="mx-auto">
                        <button className='w-100 py-2 rounded-5' onClick={generate}>
                            Get Price
                        </button>
                    </Col>
                </Row>
            
                {(finalrate!= null)?<p className='fs-1 text-center'><PiCurrencyInrBold/>{finalrate}</p>: null}
                </Col>
            </Row>
        </div>
    )
}

export default Home
