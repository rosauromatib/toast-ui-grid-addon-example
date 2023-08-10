package com.example.application.views.main;

import com.vaadin.flow.component.applayout.AppLayout;
import com.vaadin.flow.component.applayout.DrawerToggle;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.RouterLink;

public class MainLayout extends AppLayout {

    public MainLayout() {
        final DrawerToggle drawerToggle = new DrawerToggle();

        final RouterLink basicExample =
                new RouterLink("1. Basic", BasicExample.class);
        final RouterLink relationBetweenColumnsExample =
                new RouterLink("2. Relation between columns", RelationBetweenColumnsExample.class);
        final RouterLink datePickerExample =
                new RouterLink("3. DatePicker", DatePickerExample.class);
        final RouterLink treeExample =
                new RouterLink("4. Tree", TreeExample.class);

        final VerticalLayout menuLayout = new VerticalLayout(basicExample, relationBetweenColumnsExample,
                datePickerExample, treeExample);
        addToDrawer(menuLayout);
        addToNavbar(drawerToggle);
    }
}
