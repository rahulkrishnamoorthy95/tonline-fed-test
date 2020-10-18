import React from 'react';

function Cards({ data }) {

    if (data && data.length < 1) {
        return null;
    }

    return data.map((profile, index) => {
        return (
            <div className="card container" id={profile?.id} key={profile?.id || index}>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <img className="img-rounded img-responsive" src={profile?.picture} alt="Denim Jeans" />
                    </div>
                    <div className="col-sm-6 col-md-8">
                        <h4>{profile?.name}</h4>
                        <small><cite title={profile?.location}>{profile?.location}<i className="icon location"></i></cite></small>
                        <p>
                            <i className="icon envelope"></i>{profile?.email}<br />
                            <i className="icon earphone"></i>{profile?.phone}<br />
                            <i className="icon calendar"></i>{profile?.dob}<br />
                            <i className={`icon ${profile?.gender}`}></i>{profile?.gender}
                        </p>
                        <div className="button-group">
                        <button type="button" className="button button-primary">{'View full profile'}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
  }

  export default Cards;