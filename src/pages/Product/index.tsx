import { PageBreadcrumb } from '@/components'
import { Button, Card, Table } from 'react-bootstrap'

import avatar2 from '@/assets/images/users/avatar-2.jpg'
import avatar3 from '@/assets/images/users/avatar-3.jpg'
import avatar4 from '@/assets/images/users/avatar-4.jpg'
import avatar5 from '@/assets/images/users/avatar-5.jpg'
import { Link } from 'react-router-dom'

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
	{
		id: 5,
		name: 'Linda G. Smith',
		phoneNo: '606-253-1207',
		dob: 'May 3, 1962',
		country: 'Brazil',
		accountNo: 'CA269 714 6825',
		image: avatar5,
		cell: 'Cell',
	},
	{
		id: 6,
		name: 'Linda G. Smith',
		phoneNo: '606-253-1207',
		dob: 'May 3, 1962',
		country: 'Brazil',
		accountNo: 'CA269 714 6825',
		image: avatar5,
		cell: 'Cell',
	},
]

const Product = () => {
	return (
		<>
			<PageBreadcrumb title="Product" subName="Dashboards" />

			<div
				className="d-flex justify-content-between"
				style={{ marginTop: '10px' }}>
				<div className="d-flex gap-1">
					<Button className="btn-outline-primary">
						<i className="ri-equalizer-line me-1" /> filter
					</Button>
					<form>
						<div className="input-group">
							<input
								type="search"
								className="form-control"
								placeholder="Search..."
							/>
						</div>
					</form>
				</div>
				<div className="d-flex gap-1">
				<Button variant="danger">
						<i className="ri-save-fill me-1" /> <span>PDF</span>
					</Button>
					<Button variant="danger">
						<i className="ri-save-fill me-1" /> <span>Print</span>
					</Button>
					<Button variant="success">
						<i className="ri-rocket-line me-1" /> <span>WORD</span>
					</Button>
				</div>
			</div>
			<div className="mt-3">
				<Card>
					<Card.Header>
						<div className="d-flex justify-content-between items-center">
							<h4 className="header-title">Product</h4>
							<Button variant="outline-dark">
								<i className="ri-server-line me-1" /> <span>Add Product</span>
							</Button>
						</div>
					</Card.Header>
					<Card.Body>
						<div className="table-responsive-sm">
							<Table className="table-striped table-centered mb-0">
								<thead>
									<tr>
										<th>Product Name</th>
										<th>Product ID</th>
										<th>Category</th>
										<th>Available</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									{(records || []).map((record, idx) => {
										return (
											<tr key={idx}>
												<td className="table-user">
													{/* <img
														src={record.image}
														alt="table-user"
														className="me-2 rounded-circle"
													/> */}
													&nbsp;{record.name}
												</td>
												<td>{record.accountNo}</td>
												<td>{record.dob}</td>
												<td>Loding</td>
												<td>
													<Link to="#" className="text-reset fs-16 px-1">
														{' '}
														<i className="ri-settings-3-line" />
													</Link>
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
						</div>
					</Card.Body>
				</Card>
			</div>
		</>
	)
}

export default Product
