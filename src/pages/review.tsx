import {ReadReview,WriteReview} from "components/reviewComponent"

export default function Review(){
    return (
        <div style={{
            width:"100vw",
            height:"100vh",
            display:"flex",
            justifyContent:"space-around",
            alignItems:"center"
        }}>
        <ReadReview/>
        <WriteReview/>
        </div>
    )
}