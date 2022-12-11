import React, { useEffect, useState } from 'react';

const CatagorySection = () => {

    const [product, setProduct] = useState([])

    const getProduct = async () => {
        const res = await fetch('https://resale-backend.vercel.app/category');
        console.log(res);
        setProduct(await res.json());
        // console.log(data);
    }

    useEffect(() => {
        getProduct();
    }, []);





    return (

        <>


            <div className='catagory_area'>
                <div className='container-fluid'>
                    <h2>New Top Category</h2>
                    <div className='row'>
                        {
                            product.map((catagory) => {
                                const {id, image, name} = catagory; 
                                return (
                                    <>
                                        <div className='col-lg-3 col-md-3 col-sm-6' key={id}>
                                            <div className="card card_box">
                                                <img src={image} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <p className="card-text">{name}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>


        </>
    );
};

export default CatagorySection;