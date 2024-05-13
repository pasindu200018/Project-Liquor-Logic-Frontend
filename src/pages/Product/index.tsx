import { PageBreadcrumb } from '@/components'
import { Button } from 'react-bootstrap'

const Product = () => {
	return (
		<>
			<PageBreadcrumb title="Product" subName="Dashboards" />
			123
			<div className="d-flex justify-content-between" style={{ marginTop: '10px' }}>
				<div className='d-flex gap-1'>

				<Button className="btn-outline-primary">
					<i className="ri-equalizer-line me-1" /> filter
				</Button>
				<Button className="btn-outline-primary">
					<i className="ri-equalizer-line me-1" /> Settings
				</Button>
				</div>
				<div className='d-flex gap-1'>

				<Button className="btn-outline-primary">
					<i className="ri-equalizer-line me-1" /> filter
				</Button>
				<Button className="btn-outline-primary">
					<i className="ri-equalizer-line me-1" /> Settings
				</Button>
				</div>
			</div>
		</>
	)
}

export default Product
