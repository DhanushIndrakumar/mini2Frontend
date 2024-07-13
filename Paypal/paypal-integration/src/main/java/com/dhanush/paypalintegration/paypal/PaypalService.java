package com.dhanush.paypalintegration.config.paypal;

import com.paypal.api.payments.*;
import com.paypal.base.rest.APIContext;
import com.paypal.base.rest.PayPalRESTException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

@Service
@RequiredArgsConstructor
public class PaypalService {
    @Autowired
    private APIContext apiContext;

    Payment createPayment(
            Double total,
            String currency,
            String method,
            String intent,
            String description,
            String cancelUrl,
            String successUrl
    ) throws PayPalRESTException {
        Amount amount=new Amount();
        amount.setCurrency(currency);
        amount.setTotal(String.format(Locale.forLanguageTag(currency),"%.2f",total));//9.99$-9.99 we are using US local
        //we are setting locale dynamic depending on the currency
        Transaction transaction=new Transaction();
        transaction.setAmount(amount);

        List<Transaction> transactions=new ArrayList<>();
        //within one payment we can have multiple transactions
        transactions.add(transaction);

        //what is the payment method used
        Payer payer=new Payer();
        payer.setPaymentMethod(method);

        Payment payment=new Payment();
        payment.setIntent(intent);
        payment.setPayer(payer);
        payment.setTransactions(transactions);

        RedirectUrls redirectUrls=new RedirectUrls();
        redirectUrls.setCancelUrl(cancelUrl);
        redirectUrls.setReturnUrl(successUrl);

        payment.setRedirectUrls(redirectUrls);

        return payment.create(apiContext);
    }
    //execute the payment
    public Payment executePayment(
            String paymentId,
            String payerId
    ) throws PayPalRESTException {
        Payment payment=new Payment();
        payment.setId(paymentId);
        PaymentExecution paymentExecution=new PaymentExecution();
        //holds the information of payer
        paymentExecution.setPayerId(payerId);

        return payment.execute(apiContext,paymentExecution);
    }

}
