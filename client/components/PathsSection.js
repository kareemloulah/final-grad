import React from 'react'
import { useRouter } from 'next/router'
import {Row , Col} from 'antd'
import { Paths } from '../utils/dummyData'
import Link from 'next/link'

const PathsSection = ({Id , Title}) => {
  console.log(Id)
  return (
    <>
      <div style={{ backgroundColor: "#2d5ebe", padding: "30px", marginBottom: '50px' }}>
        <div className="container">
          <Row gutter={[16, 16]}>
            {/* {Id.map((path) => (
              <div key={path.id} className="col-lg-4">
                <Link href={`/Paths/${path.id}`}>
                  <div
                    className="card m-2 p-2"
                    style={{ alignItems: "center", cursor: "pointer" }}
                  >
                    <h6 className="card-title m-2"> {path.title} </h6>
                  </div>
                </Link>
              </div>
            ))} */}
          </Row>
        </div>
      </div>
    </>
  )
}

export default PathsSection