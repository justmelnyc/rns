'use client'
import React from 'react'
import {Button} from '@/components/ui'

function ItemAction() {

    return (
        <>
            <div className="ProductBar_bottomWrapper ProductBar_over">
                <div className="ProductBar_bottom">
                    <Button
                        className="ProductButton_button"
                    >
                        <span className="ProductButton_inner">
                            Add to cart
                            <div className="ProductPrice_wrapper">
                                <div className="ProductPrice_inner styling_s">
                                    <span className="ProductPrice">
                                      <span className="Price_amount styling_mono">770</span>
                                      <span className="Price_currency">USD</span>
                                    </span>
                                </div>
                            </div>
                        </span>
                    </Button>
                </div>
            </div>
        </>
    )
}

export default ItemAction