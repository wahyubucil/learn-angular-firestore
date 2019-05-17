import { Component, OnInit } from "@angular/core";
import { OrdersService } from "../shared/orders.service";

@Component({
  selector: "app-order-list",
  templateUrl: "./order-list.component.html",
  styleUrls: ["./order-list.component.scss"]
})
export class OrderListComponent implements OnInit {
  coffeeOrders = [];

  constructor(private ordersService: OrdersService) {}

  ngOnInit() {
    this.getCoffeeOrders();
  }

  getCoffeeOrders() {
    this.ordersService
      .getCoffeeOrders()
      .subscribe(res => (this.coffeeOrders = res));
  }
}
