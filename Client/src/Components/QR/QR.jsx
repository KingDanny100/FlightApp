import React from 'react'
import QRCode from 'qrcode.react'

const QR = ({details}) => {
  return (
    <div className='qr_container'>
        <QRCode value={JSON.stringify(details)} />
    </div>
  )
}

export default QR