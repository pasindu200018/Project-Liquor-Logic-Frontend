import { Button, Col, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Select from 'react-select'

import avatar2 from '@/assets/images/users/avatar-2.jpg'
import avatar3 from '@/assets/images/users/avatar-3.jpg'
import avatar4 from '@/assets/images/users/avatar-4.jpg'
import avatar5 from '@/assets/images/users/avatar-5.jpg'

export const options = [
	{ value: '', label: 'Select' },
	{ value: 'AK', label: 'Alaska' },
	{ value: 'HI', label: 'Hawaii' },
	{ value: 'CA', label: 'California' },
	{ value: 'NV', label: 'Nevada' },
]

interface TableRecord {
	id: number
	name: string
	phoneNo: string
	dob: string
	country: string
	accountNo: string
	image: string
	cell: string
	activeClass?: string
}

const records: TableRecord[] = [
	{
		id: 1,
		name: 'Risa D. Pearson',
		phoneNo: '336-508-2157',
		dob: 'July 24, 1950',
		country: 'India',
		accountNo: 'AC336 508 2157',
		image: avatar2,
		cell: 'Cell',
		activeClass: 'table-active',
	},
	{
		id: 2,
		name: 'Ann C. Thompson',
		phoneNo: '646-473-2057',
		dob: 'January 25, 1959',
		country: 'USA',
		accountNo: 'SB646 473 2057',
		image: avatar3,
		cell: 'Cell',
	},
	{
		id: 3,
		name: 'Paul J. Friend',
		phoneNo: '281-308-0793',
		dob: 'September 1, 1939',
		country: 'Canada',
		accountNo: 'DL281 308 0793',
		image: avatar4,
		cell: 'Cell',
	},
	{
		id: 4,
		name: 'Linda G. Smith',
		phoneNo: '606-253-1207',
		dob: 'May 3, 1962',
		country: 'Brazil',
		accountNo: 'CA269 714 6825',
		image: avatar5,
		cell: 'Cell',
	},
]
interface ExpandableRecord {
	product: string
	courier: string
	variant: string
	now: number
	status: string
	price: string
	Quantity: string
	Amount: string
}
const expandablerecords: ExpandableRecord[] = [
	{
		product: 'ASOS Ridley High Waist',
		courier: 'FedEx',
		variant: 'success',
		now: 100,
		status: 'Delivered',
		price: '$79.49',
		Quantity: '82',
		Amount: '6,518.18',
	},
	{
		product: 'Marco Lightweight Shirt',
		courier: 'DHL',
		variant: 'warning',
		now: 50,
		status: 'Shipped',
		price: '$128.50',
		Quantity: '37',
		Amount: '4,754.50',
	},
	{
		product: 'Half Sleeve Shirt',
		courier: 'Bright',
		variant: 'info',
		now: 25,
		status: 'Order Received',
		price: '$39.99',
		Quantity: '64',
		Amount: '2,559.36',
	},
	{
		product: 'Lightweight Jacket',
		courier: 'FedEx',
		variant: 'success',
		now: 100,
		status: 'Delivered',
		price: '$20.00',
		Quantity: '184',
		Amount: '3,680.00',
	},
	{
		product: 'Cargo Pant & Shirt',
		courier: 'FedEx',
		variant: 'danger',
		now: 10,
		status: 'Payment Failed',
		price: '$28.49',
		Quantity: '69',
		Amount: '1,965.81',
	},
	{
		product: 'ASOS Ridley High Waist',
		courier: 'FedEx',
		variant: 'danger',
		now: 10,
		status: 'Payment Failed',
		price: '$79.49',
		Quantity: '82',
		Amount: '6,518.18',
	},
]

const Pos = () => {
	return (
		<>
			<div className="d-flex justify-content-between align-items-center mt-3 mb-3 ">
				<h4>Cashier : Imalka Thathmi</h4>
				<Button className="btn-primary">
					<i className="ri-paypal-line me-1" /> Histroy
				</Button>
			</div>
			<div className="grid-structure">
				<Row>
					<Col lg={7}>
						<div className="grid-container justify-content-between pt-3">
							<Row>
								<Col lg={3}>
									<h5>Customer</h5>
									<Select className="select2 z-3" options={options} />
								</Col>
								<Col lg={3}>
									<h5>Product ID</h5>
									<Select className="select2 z-3" options={options} />
								</Col>
								<Col lg={6}>
									<h5 className="-mt-5">Product Name</h5>
									<Select className="select2 z-3 " options={options} />
								</Col>
							</Row>
							{/* table  */}
							<Table className="table-bordered table-centered mb-3 mt-3">
								<thead>
									<tr>
										<th>Product</th>
										<th>Product ID</th>
										<th>Price</th>
										<th>Balance</th>
										<th className="text-center">Action</th>
									</tr>
								</thead>
								<tbody>
									{(records || []).map((record, idx) => {
										return (
											<tr key={idx}>
												<td className="table-user">&nbsp;{record.name}</td>
												<td>{record.accountNo}</td>
												<td>{record.dob}</td>
												<td>450.00</td>
												<td align="center">
													<Link to="#" className="text-reset fs-16 px-1">
														{' '}
														<i className="ri-delete-bin-2-line" />
													</Link>
												</td>
											</tr>
										)
									})}
								</tbody>
							</Table>

							{/* table  */}
						</div>
					</Col>

					<Col lg={5}>
						<div className="grid-container  pt-3">
							<h5>Selected Product</h5>
							<Table className="table-hover table-centered mb-0">
								<thead>
									<tr>
										<th>Product</th>
										<th>Quantity</th>
										<th>Price</th>
										<th>Amount</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									{(expandablerecords || []).slice(0, 4).map((record, idx) => {
										return (
											<tr key={idx}>
												<td>{record.product}</td>
												<td>{record.price}</td>
												<td>4</td>
												<td>${record.Amount}</td>
												<td>
												<i className="bi bi-plus-lg"></i>
												</td>
											</tr>
										)
									})}
								</tbody>
							</Table>
						</div>
						
						<div className="grid-container py-2">
							<Row>
								<Col
									className="d-flex justify-content-between align-items-center py-2"
									lg={4}>
									<span>Total item</span>
									<span className="fw-bold">04</span>
								</Col>
								<Col
									className="d-flex justify-content-between align-items-center py-2"
									lg={4}>
									<span>Total Cost</span>
									<span className="fw-bold">800</span>
								</Col>
								<Col
									className="d-flex justify-content-between align-items-center py-2"
									lg={4}>
									<span>Discount</span>
									<span className="fw-bold">04</span>
								</Col>
							</Row>
							<Button variant="secondary" className="btn-sm mt-2 w-100 p-2  fs-4">
								Grand Total Rs 800.00
							</Button>
						</div>
					</Col>
				</Row>
			</div>
		</>
	)
}

export default Pos
