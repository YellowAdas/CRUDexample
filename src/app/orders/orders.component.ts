import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../shared/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  coffeeOrder: string[] = [];
  constructor(public ordersService: OrdersService) {}
  coffees = [
    'Americano',
    'Flat White',
    'Cappuccino',
    'Latte',
    'Espresso',
    'Machiato',
    'Mocha',
    'Hot Chocolate',
    'Tea',
  ];

  addCoffee(coffee: string) {
    this.coffeeOrder.push(coffee);
  }
  removeCoffee(coffee: string, id: number) {
    if (this.coffeeOrder) {
      this.coffeeOrder.splice(id, 1);
    }
  }
  onSubmit() {
    this.ordersService.form.value.coffeeOrder = this.coffeeOrder;
    let data = this.ordersService.form.value;

    this.ordersService.createCoffeeOrder(data).then((res) => {
      /*do something here....
           maybe clear the form or give a success message*/
    });
  }

  ngOnInit(): void {}
}
