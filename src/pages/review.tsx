import {ReadReview,WriteReview} from "components/reviewComponent"

export default function Review(){
    return (
        <div style={{
            display:"flex"
            
        }}>
        <ReadReview/>
        <WriteReview/>
        </div>
    )
}