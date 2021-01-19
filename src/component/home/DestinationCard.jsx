function DestinationCard(props) {
    return (
        <>
            <div className="col-md-4 mb-3">
                <img src={props.imgsrc} className="w-100 destinationImgs" alt="jaisalmerImg" />
                <div className="DestinationCaption overlay">
                    <h3 className="text-white">{props.destinationHeading}</h3>
                    <p className="locationDetails text-white">{props.destinationDetails}</p>
                    <button className="imgDetailBtn">Details</button>
                </div>
            </div>
        </>
    );
}

export default DestinationCard;