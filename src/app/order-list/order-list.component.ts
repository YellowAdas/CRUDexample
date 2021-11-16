import { Component, OnInit } from '@angular/core';
import { DocumentChangeAction } from '@angular/fire/compat/firestore';
import { OrdersService } from '../shared/orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {}

  coffeeOrders: DocumentChangeAction<string>[] = [];
  getCoffeeOrders() {
    const orderList = this.ordersService.getCoffeeOrders();
    orderList.subscribe((res) => (this.coffeeOrders = res));
  }
}
