import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import * as R from "./ReadReview.style"
import * as C from "./Common.style"

// import * as Im from "assets/image.png"
import leftArrow from "assets/image/review/leftArrow.svg"
import rightArrow from "assets/image/review/rightArrow.svg"
import emptyStar from "assets/image/review/readEmptyStar.svg"
import fullStar from "assets/image/review/readFullStar.svg"

export default function ReadReview(){
    interface ReviewType{
        id:number;
    }

    const [reviews,setReviews] = useState([
        {
            id:1,
            stars:5,
            comment:"맛있어요"
        },
        {
            id:2,
            stars:5,
            comment:"맛있어요"
        },
        {
            id:3,
            stars:5,
            comment:"맛있어요"
        },
        {
            id:4,
            stars:5,
            comment:"맛있어요"
        },
        {
            id:5,
            stars:5,
            comment:"맛있어요"
        },
        {
            id:6,
            stars:5,
            comment:"맛있어요"
        },
        {
            id:7,
            stars:5,
            comment:"맛있어요"
        },
        {
            id:8,
            stars:5,
            comment:"맛있어요"
        }
    ])
    return (
        <R.Container>
            <R.InnerContainer>
                <R.NavContainer>
                    <nav>
                        <div>
                        <Image src={leftArrow}/>
                        </div>
                        <div>0000</div>
                        <div>.</div>
                        <div>00</div>
                        <div>.</div>
                        <div>00</div>
                        <div>(일)</div>
                        <div>
                        <Image src={rightArrow}/>
                        </div>
                    </nav>
                    <C.ButtonsContainer>
                        <C.Button>아침</C.Button>
                        <C.Button>점심</C.Button>
                        <C.Button>저녁</C.Button>
                    </C.ButtonsContainer>
                </R.NavContainer>
                <R.Temp/>
                {
                    reviews?.map((review:ReviewType) => (
                        <R.CommentContainer key={review.id}>
                            <R.StarContainer>
                                <Image src={fullStar}/>
                                <Image src={fullStar}/>
                                <Image src={fullStar}/>
                                <Image src={fullStar}/>
                                <Image src={emptyStar}/>
                            </R.StarContainer>
                            <R.Comment>
                            맛있어요 박병관은 nextjs를 마스터하고 ts를 마스터하고 서버를 시작했습니다
                            </R.Comment>
                        </R.CommentContainer>
                    ))
                }
            </R.InnerContainer>
        </R.Container>
    )
}